import React, { useState } from "react";
import { Char } from "../data/letter";
import LetterTile from "./LetterTile";

export default function LetterForm() {
    const [letter, setLetter] = useState<Char>("A");
    const [colour, setColour] = useState("#ffffff");

    function onLetterInput(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.target.value.toUpperCase();
        val = val.length > 1 ? val.substring(0, 1) : val;
        setLetter(val as Char);
    }

    return (
        <div>
            <LetterTile data={{ letter, color: colour }} />
            <div>
                <label>Letter</label>
                <input
                    type="text" maxLength={1}
                    onChange={onLetterInput}
                    value={letter}
                />
            </div>
            <div>
                <label>Colour</label>
                <input
                    type="color"
                    onChange={e => setColour(e.target.value)}
                    value={colour}
                />
            </div>
        </div>
    );
}