import Letter from "../data/letter";
import styles from './LetterTile.module.css';

interface LetterTileProps {
    data: Letter;
}

export default function LetterTile({ data }: LetterTileProps) {
    return (
        <div
            className={styles.tile}
            style={{
                backgroundColor: data.color
            }}
        >
            {data.letter}
        </div>
    );
}