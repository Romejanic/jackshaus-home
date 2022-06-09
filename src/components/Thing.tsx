import styles from './Thing.module.css';
import ThingData from "../data/thing";

interface ThingProps {
    data: ThingData;
}

export default function Thing({ data }: ThingProps) {
    return (
        <div className={styles.thing}>
            <span>{data.name}</span>
            <span>{data.description}</span>
            <span>{data.image}</span>
        </div>
    );
}