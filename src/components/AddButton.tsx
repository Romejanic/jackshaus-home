import styles from './AddButton.module.css';
import parentStyles from './Letterbox.module.css';

interface AddButtonProps {
    onPress: () => void;
    show?: boolean;
}

export default function AddButton({ onPress, show = true }: AddButtonProps) {
    return (
        <div
            onClick={onPress}
            className={`${styles.addButton} ${parentStyles.addButton} ${!show ? styles.hidden : ""}`}
            title="Add a letter"
        >
            +
        </div>
    );
}