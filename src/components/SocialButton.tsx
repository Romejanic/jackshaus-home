import githubIcon from '../images/social/github.png';

interface SocialButtonProps {
    platform: "github";
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
        default:
            return { link: "#", icon: "" };
    }
};

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export default function SocialButton(props: SocialButtonProps) {
    const data = getSocialData(props);
    const platformName = capitalize(props.platform);
    return (
        <a href={data.link} target="_blank" title={platformName}>
            <img
                width={props.size || 64}
                height={props.size || 64}
                alt={platformName}
                src={data.icon}
            />
        </a>
    );
}