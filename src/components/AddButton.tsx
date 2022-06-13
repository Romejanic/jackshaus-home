import styles from './AddButton.module.css';
import parentStyles from './Letterbox.module.css';

interface AddButtonProps {
    onPress: () => void;
}

export default function AddButton({ onPress }: AddButtonProps) {
    return (
        <div
            onClick={onPress}
            className={`${styles.addButton} ${parentStyles.addButton}`}
        >
            +
        </div>
    );
}