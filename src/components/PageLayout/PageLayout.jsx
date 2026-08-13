import { Link } from "react-router";
import BackButton from "../BackButton/BackButton";
import styles from "./PageLayout.module.css";

export default function PageLayout({ title, children }) {
  return (
    <main className={styles.page}>
      <nav className={styles.navigation}>
        <BackButton />

        <Link to="/" className={styles.deskButton}>
          Back to the desk ↗
        </Link>
      </nav>

      <header className={styles.header}>
        <h1>{title}</h1>
      </header>

      <section className={styles.content}>{children}</section>
    </main>
  );
}
