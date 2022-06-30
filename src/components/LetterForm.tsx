import React, { useState } from "react";
import Letter, { Char } from "../data/letter";
import LetterTile from "./LetterTile";
import styles from "./LetterForm.module.css";

interface LetterFormProps {
    onSubmit: (letter: Letter) => void;
    onCancel: () => void;
};

export default function LetterForm({ onSubmit, onCancel }: LetterFormProps) {
    const [letter, setLetter] = useState<Char>("J");
    const [colour, setColour] = useState("#ffffff");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function onLetterInput(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.target.value.toUpperCase();
        val = val.length > 1 ? val.substring(0, 1) : val;
        setLetter(val as Char);
    }

    const inputValid = letter.length > 0 && colour.length >= 6;

    function submitLetter() {
        setSubmitted(true);
        setError("");

        fetch("/api/add_letter.php", {
            method: "POST",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },  
            body: new URLSearchParams({
                letter, color: colour
            })
        })
        .then(res => res.json())
        .then(res => {
            if(!res.success) {
                setError(res.error);
            } else {
                onSubmit({ letter: letter, color: colour });
            }
            setSubmitted(false);
        })
        .catch(e => {
            setError(e);
            setSubmitted(false);
        });
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
            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    disabled={!inputValid || submitted}
                    onClick={submitLetter}
                >
                    Submit
                </button>
                <button
                    className={styles.button}
                    disabled={submitted}
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
            <span className={styles.error}>{error}</span>
        </div>
    );
}