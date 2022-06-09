import { useState } from "react";
import styles from './Letterbox.module.css';
import Box from "./Box";
import LetterTile from "./LetterTile";
import Title from "./Title";

import Letter from "../data/letter";

const DUMMY_LETTERS: Letter[] = [
    {
        letter: "T",
        color: "#ffee22"
    },
    {
        letter: "E",
        color: "#cccccc"
    },
    {
        letter: "S",
        color: "#ffee22"
    },
    {
        letter: "T",
        color: "#ffee22"
    }
];

export default function Letterbox() {
    const [letters] = useState(DUMMY_LETTERS);

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