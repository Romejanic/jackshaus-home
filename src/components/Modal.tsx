import React from "react";
import styles from "./Modal.module.css";

type ModalProps = React.PropsWithChildren<{
    open: boolean;
    handleClose: () => void;
}>;

export default function Modal(props: ModalProps) {
    const modalClass = `${styles.modalContainer} ${props.open ? styles.open : ""}`;
    return (
        <div
            className={modalClass}
        >
            {props.children}
        </div>
    );
}