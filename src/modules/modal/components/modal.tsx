import { FC, ReactNode } from "react"
import styles from "./modal.module.css"

export type ModalProps = {
    body:ReactNode;
    header: string;
    closeModal:() => void;
}

export const Modal: FC<ModalProps> = ({body,header}) => {
    return <div id={styles.Modal}>
        <div className={styles.modalHeader}>{header}</div>
        <div className={styles.modalBody}>{body}</div>
    </div>;
}