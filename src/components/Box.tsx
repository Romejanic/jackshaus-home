import React from 'react';
import styles from './Box.module.css';

type BoxProps = React.PropsWithChildren<{
    className?: string;
}>;

export default function Box(props: BoxProps) {
    return (
        <section className={styles.box + " " + (props.className || "")}>
            {props.children}
        </section>
    );
};