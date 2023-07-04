import styles from "./Header.module.scss";

interface HeaderProps {
  headerText: string;
  subHeaderText: string;
}

export default function Header({ headerText, subHeaderText }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>{headerText}</h1>
      <p>{subHeaderText}</p>
    </div>
  );
}
