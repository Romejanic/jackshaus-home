import Gravatar from 'react-gravatar';
import styles from './Header.module.css';
import SocialButton from './SocialButton';

// precalculated to avoid exposing my email ;)
const GRAVATAR_HASH = "f23ac41fd510b6da36d8f6c3f8aa71b6";
const SOCIAL_BTN_SIZE = 42;

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
            <SocialButton
                platform='github'
                profile='Romejanic' 
                size={SOCIAL_BTN_SIZE}
            />
            <SocialButton
                platform='twitter'
                profile='jackd5011'
                size={SOCIAL_BTN_SIZE}
            />
            <SocialButton
                platform='linkedin'
                profile='jack-davenport-bab053189'
                size={SOCIAL_BTN_SIZE}
            />
        </header>
    );
}