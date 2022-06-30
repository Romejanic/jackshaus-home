import React, { useState } from "react";
import { Char } from "../data/letter";
import LetterTile from "./LetterTile";
import styles from "./LetterForm.module.css";

export default function LetterForm() {
    const [letter, setLetter] = useState<Char>("J");
    const [colour, setColour] = useState("#ffffff");

    function onLetterInput(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.target.value.toUpperCase();
        val = val.length > 1 ? val.substring(0, 1) : val;
        setLetter(val as Char);
    }

    return (
        <div className={styles.form}>
            <LetterTile data={{ letter, color: colour }} />
            <div className={styles.inputs}>
                <div>
                    <label className={styles.label}>Letter</label>
                    <input
                        className={styles.input}
                        type="text" maxLength={1}
                        onChange={onLetterInput}
                        value={letter}
                    />
                </div>
                <div>
                    <label className={styles.label}>Colour</label>
                    <input
                        className={styles.input}
                        type="color"
                        onChange={e => setColour(e.target.value)}
                        value={colour}
                    />
                </div>
            </div>
        </div>
    );
}