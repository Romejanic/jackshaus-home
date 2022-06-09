import githubIcon from '../images/social/github.png';
import twitterIcon from '../images/social/twitter.png';
import linkedinIcon from '../images/social/linkedin.png';

import styles from './SocialButton.module.css';

interface SocialButtonProps {
    platform: "github" | "twitter" | "linkedin";
    profile: string;
    size?: number;
}

const getSocialData = (props: SocialButtonProps) => {
    switch(props.platform) {
        case "github":
            return {
                link: `https://github.com/${props.profile}`,
                icon: githubIcon
            };
        case "twitter":
            return {
                link: `https://twitter.com/${props.profile}`,
                icon: twitterIcon
            };
        case "linkedin":
            return {
                link: `https://www.linkedin.com/in/${props.profile}`,
                icon: linkedinIcon
            };
        default:
            return { link: "#", icon: "" };
    }
};

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export default function SocialButton(props: SocialButtonProps) {
    const data = getSocialData(props);
    const platformName = capitalize(props.platform);
    return (
        <a
            href={data.link}
            title={platformName}
            className={styles.socialButton}
            target="_blank" rel="noreferrer"
        >
            <img
                width={props.size || 64}
                height={props.size || 64}
                alt={platformName}
                src={data.icon}
                className={styles.icon}
                draggable={false}
            />
        </a>
    );
}