import React, { useState } from "react";
import { Char } from "../data/letter";
import LetterTile from "./LetterTile";

export default function LetterForm() {
    const [letter, setLetter] = useState<Char>("A");
    const [colour, setColour] = useState("#ffffff");

    return (
        <div>
            <LetterTile data={{ letter, color: colour }} />
            <div>
                <label>Letter</label>
                <input
                    type="text" maxLength={1}
                    onChange={e => setLetter(e.target.value.toUpperCase() as Char)}
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