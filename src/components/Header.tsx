import Gravatar from 'react-gravatar';
import styles from './Header.module.css';
import SocialButton from './SocialButton';

// precalculated to avoid exposing my email ;)
const GRAVATAR_HASH = "f23ac41fd510b6da36d8f6c3f8aa71b6";

export default function Header() {
    return (
        <header className={styles.header}>
            <Gravatar
                md5={GRAVATAR_HASH}
                className={styles.avatar}
                size={100}
            />
            <span className={styles.title}>
                Jack's Haus
            </span>
            <div className="social-buttons">
                <SocialButton
                    platform='github'
                    profile='Romejanic' 
                    size={42}
                />
            </div>
        </header>
    );
}