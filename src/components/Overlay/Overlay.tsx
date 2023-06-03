import React from "react";
import styles from "./Overlay.module.css";

interface OverlayProps {
    onCloseModal: () => void;
}

export default function Overlay({ onCloseModal }: OverlayProps) {
    return <div className={styles.overlay} onClick={onCloseModal}></div>;
}
