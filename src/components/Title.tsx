import React from 'react';
import styles from './Title.module.css';

type TitleProps = React.PropsWithChildren<{
    small?: boolean;
}>;

export default function Title(props: TitleProps) {
    const sizeClass = props.small ? styles.small : "normal";
    return (
        <span className={`${styles.title} ${sizeClass}`}>
            {props.children}
        </span>
    );
}