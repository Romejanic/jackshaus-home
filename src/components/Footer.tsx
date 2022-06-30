import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const GITHUB_URL = "https://github.com/Romejanic/jackshaus-home";
const RELEASES_URL = "https://github.com/Romejanic/jackshaus-home/releases";
const RELEASES_API = "https://api.github.com/repos/Romejanic/jackshaus-home/releases";

const GITHUB_SHIELD_URL = "https://img.shields.io/github/stars/Romejanic/jackshaus-home?label=View%20on%20GitHub&style=social";
const VERSION_SHIELD_URL = "https://img.shields.io/github/package-json/v/Romejanic/jackshaus-home?color=ee&label=Version";

type LinkProps = React.PropsWithChildren<{
    url: string;
}>;
const Link = (props: LinkProps) => <a href={props.url} target="_blank" rel="noreferrer">{props.children}</a>;

export default function Footer() {
    const [releaseURL, setReleaseURL] = useState(RELEASES_URL);

    // fetch release data from github to link to the specific release
    useEffect(() => {
        fetch(RELEASES_API)
            .then(res => res.json())
            .then(res => {
                setReleaseURL(res[0].html_url);
            })
            .catch(console.error);
    }, []);

    return (
        <div className={styles.footer}>
            <Link url={GITHUB_URL}>
                <img src={GITHUB_SHIELD_URL} alt="View on GitHub" />
            </Link>
            <Link url={releaseURL}>
                <img src={VERSION_SHIELD_URL} alt="Version" />
            </Link>
        </div>
    );
}