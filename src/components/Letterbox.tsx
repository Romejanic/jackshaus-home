import { useEffect, useState } from "react";
import styles from './Letterbox.module.css';
import Box from "./Box";
import LetterTile from "./LetterTile";
import Title from "./Title";

import Letter from "../data/letter";
import AddButton from "./AddButton";
import Modal from "./Modal";
import LetterForm from "./LetterForm";

export default function Letterbox() {
    const [letters, setLetters] = useState<Letter[] | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // load letter data
        fetch("/api/get_letters.php")
            .then(r => r.json())
            .then(data => {
                setLetters(data as Letter[]);
            })
            .catch(err => {
                console.error("Error while fetching letters!", err);
            });
    }, []);

    function onModalClosed() {
        setModalOpen(false);
    }

    return (
        <Box className={styles.main}>
            <div className={styles.header}>
                <Title small={true}>Leave a letter!</Title>
                <AddButton onPress={() => setModalOpen(true)} />
            </div>

            {!letters && <div>
                <h3 className={styles.loading}>Loading...</h3>
            </div>}

            {letters && <div className={styles.letters}>
                {letters.map((v,i) => 
                    <LetterTile key={i} data={v} />
                )}
            </div>}

            <Modal open={modalOpen} handleClose={onModalClosed}>
                <LetterForm
                    onCancel={onModalClosed}
                />
            </Modal>
        </Box>
    );
}