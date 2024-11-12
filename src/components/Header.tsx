import Gravatar from 'react-gravatar';
import Box from './Box';
import Title from './Title';
import SocialButton from './SocialButton';
import styles from './Header.module.css';

// precalculated to avoid exposing my email ;)
const GRAVATAR_HASH = "f23ac41fd510b6da36d8f6c3f8aa71b6";
const SOCIAL_BTN_SIZE = 42;

export default function Header() {
    return (
        <Box className={styles.header}>
            <Gravatar
                md5={GRAVATAR_HASH}
                className={styles.avatar}
                size={100}
            />
            <Title>Jack's Haus</Title>
            <div className={styles.socialButtons}>
                <SocialButton
                    platform='github'
                    profile='Romejanic' 
                    size={SOCIAL_BTN_SIZE}
                />
                <SocialButton
                    platform='linkedin'
                    profile='jack-davenport-bab053189'
                    size={SOCIAL_BTN_SIZE}
                />
            </div>
        </Box>
    );
}