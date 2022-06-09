import { useState } from "react";
import styles from './Creations.module.css';
import Box from "./Box";
import Title from "./Title";
import Thing from "./Thing";

import ThingData from "../data/thing";

const DUMMY_ITEMS: ThingData[] = [
    {
        name: "Thing 1",
        description: "lorem ipsum",
        image: ""
    },
    {
        name: "Thing 2",
        description: "lorem ipsum",
        image: ""
    },
    {
        name: "Thing 3",
        description: "lorem ipsum",
        image: ""
    },
    {
        name: "Thing 4",
        description: "lorem ipsum",
        image: ""
    }
];

export default function Creations() {
    const [things] = useState(DUMMY_ITEMS);

    return (
        <Box>
            <Title small={true}>Stuff I've made</Title>

            <div className={styles.things}>
                {things.map((v,i) =>
                    <Thing key={i} data={v} />
                )}
            </div>
        </Box>
    );
}