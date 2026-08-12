import { Link } from "react-router";
import styles from "./BackButton.module.css";

export default function BackButton({ to = "/" }) {
  return (
    <Link to={to} className={styles.backButton}>
      ← Tilbage
    </Link>
  );
}
