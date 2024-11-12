import { useEffect, useState } from "react";
import styles from './Letterbox.module.css';
import Box from "./Box";
import LetterTile from "./LetterTile";
import Title from "./Title";
import AddButton from "./AddButton";
import Modal from "./Modal";
import LetterForm from "./LetterForm";
import type Letter from "../data/letter";
import endpoints from "../data/endpoints";

export default function Letterbox() {
    const [letters, setLetters] = useState<Letter[] | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // load letter data
        fetch(endpoints.letterUrl)
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

    function onLetterAdded(letter: Letter) {
        onModalClosed();
        setLetters([letter, ...letters as Letter[]]);
    }

    const showAddButton = letters != null && !modalOpen;

    return (
        <Box className={styles.main}>
            <div className={styles.header}>
                <Title small={true}>Leave a letter!</Title>
                <AddButton onPress={() => setModalOpen(true)} show={showAddButton} />
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
                    onSubmit={onLetterAdded}
                    onCancel={onModalClosed}
                />
            </Modal>
        </Box>
    );
}