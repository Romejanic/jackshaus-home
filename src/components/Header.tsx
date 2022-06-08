import Gravatar from 'react-gravatar';

// precalculate to avoid exposing my email ;)
const GRAVATAR_HASH = "f23ac41fd510b6da36d8f6c3f8aa71b6";

export default function Header() {
    return (
        <header>
            <div className="profile">
                <Gravatar
                    md5={GRAVATAR_HASH}
                />
            </div>
        </header>
    );
}