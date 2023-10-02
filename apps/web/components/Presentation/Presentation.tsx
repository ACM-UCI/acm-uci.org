import Card from "react-bootstrap/Card";
import styles from "./Presentation.module.scss";

export default function Presentation({ title, url }) {
    return (
        <Card className={styles.presentation + " mx-4 my-3"}>
            <a href={url}>
                <h4 className="text-center m-0">{title}</h4>
            </a>
        </Card>
    );
}
