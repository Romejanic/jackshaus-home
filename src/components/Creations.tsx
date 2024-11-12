import { useEffect, useState } from "react";
import styles from './Creations.module.css';
import Box from "./Box";
import Title from "./Title";
import Thing from "./Thing";
import type ThingData from "../data/thing";
import endpoints from "../data/endpoints";

export default function Creations() {
    const [things, setThings] = useState<ThingData[] | null>(null);

    useEffect(() => {
        // load thing data
        fetch(endpoints.thingsUrl)
            .then(r => r.json())
            .then(data => {
                setThings(data as ThingData[]);
            })
            .catch(err => {
                console.error("Error while fetching items!", err);
            });
    }, []);

    return (
        <Box>
            <Title small={true}>Stuff I've made</Title>

            {!things && <div>
                <h3 className={styles.loading}>Loading...</h3>    
            </div>}

            {things && <div className={styles.things}>
                {things.map((v,i) =>
                    <Thing key={i} data={v} />
                )}
            </div>}
        </Box>
    );
}