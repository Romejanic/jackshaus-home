import styles from "./Footer.module.css";

const GITHUB_URL = "https://github.com/Romejanic/jackshaus-home";
const RELEASES_URL = "https://github.com/Romejanic/jackshaus-home";

const GITHUB_SHIELD_URL = "https://img.shields.io/github/stars/Romejanic/jackshaus-home?label=View%20on%20GitHub&style=social";
const VERSION_SHIELD_URL = "https://img.shields.io/github/package-json/v/Romejanic/jackshaus-home?color=ee&label=Version";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src={GITHUB_SHIELD_URL} alt="View on GitHub" />
            <img src={VERSION_SHIELD_URL} alt="Version" />
        </div>
    );
}