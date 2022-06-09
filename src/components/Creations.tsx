import { useState } from "react";
import styles from './Creations.module.css';
import Box from "./Box";
import Title from "./Title";
import Thing from "./Thing";

import ThingData from "../data/thing";

const DUMMY_ITEMS = (() => {
    let arr: ThingData[] = [];
    for(let i = 0; i < 7; i++) {
        arr.push({
            name: "Thing " + (i+1),
            description: "lorem ipsum",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg",
            url: "/sven"
        });
    }
    return arr;
})();

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