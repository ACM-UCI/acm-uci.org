import { PropsWithChildren } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
    headerText: string;
    subHeaderText: string;
}

export default function Header({
    headerText,
    subHeaderText,
    children,
}: PropsWithChildren<HeaderProps>) {
    return (
        <div className={styles.header}>
            <h1>{headerText}</h1>
            <p>{subHeaderText}</p>
            {children}
        </div>
    );
}
