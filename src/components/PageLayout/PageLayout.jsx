import BackButton from "../BackButton/BackButton";
import styles from "./PageLayout.module.css";

export default function PageLayout({ title, children }) {
  return (
    <main className={styles.page}>
      <BackButton />

      <header className={styles.header}>
        <h1>{title}</h1>
      </header>

      <section className={styles.content}>{children}</section>
    </main>
  );
}
