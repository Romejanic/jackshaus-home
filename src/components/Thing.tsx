import styles from './Thing.module.css';
import ThingData from "../data/thing";

interface ThingProps {
    data: ThingData;
}

export default function Thing({ data }: ThingProps) {
    return (
        <a href={data.url} target="_blank" rel="noreferrer" className={styles.thing}>
            <img className={styles.thumb} src={data.image} alt={data.name} />
            <div className={styles.info}>
                <span className={styles.title}>{data.name}</span>
                <span className={styles.subtitle}>{data.description}</span>
            </div>
        </a>
    );
}