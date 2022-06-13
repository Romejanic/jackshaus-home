import { useEffect, useState } from "react";
import styles from './Letterbox.module.css';
import Box from "./Box";
import LetterTile from "./LetterTile";
import Title from "./Title";

import Letter from "../data/letter";

export default function Letterbox() {
    const [letters, setLetters] = useState<Letter[]>([]);

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

    return (
        <Box>
            <Title small={true}>Leave a letter!</Title>

            <div className={styles.letters}>
                {letters.map((v,i) => 
                    <LetterTile key={i} data={v} />
                )}
            </div>
        </Box>
    );
}