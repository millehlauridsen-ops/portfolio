import leftHand from "../../assets/lefthand.png";
import styles from "./Hands.module.css";

export default function LeftHand() {
  return (
    <img
      src={leftHand}
      alt=""
      className={`${styles.handImage} ${styles.left}`}
    />
  );
}
