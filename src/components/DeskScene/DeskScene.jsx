import styles from "./DeskScene.module.css";
import { Link } from "react-router";

import Hands from "../Hands/Hands";
import LeftHand from "../Hands/LeftHand";
import RightHand from "../Hands/RightHand";
import tabletImage from "../../assets/tablet.png";
import computerImage from "../../assets/computer.png";
import cvImage from "../../assets/cv.png";
import phoneImage from "../../assets/phone.png";
import meImage from "../../assets/me.png";
import deskBackground from "../../assets/desk-background.png";

export default function DeskScene() {
  return (
    <main className={styles.scene}>
      <div className={styles.room}>
        {/* Background */}
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${deskBackground})` }}
        />

        {/* Person sitting on the other side of the desk */}
        <Link to="/me" className={styles.character}>
          <img src={meImage} alt="Me" className={styles.objectImage} />
        </Link>

        {/* Desk */}
        <div className={styles.desk}>
          <div className={styles.deskSurface}>
            {/* Back / further away */}

            <Link
              to="/websites"
              className={`${styles.object} ${styles.laptop}`}
            >
              <img
                src={computerImage}
                alt="Computer"
                className={styles.objectImage}
              />
            </Link>

            <Link to="/cv" className={`${styles.object} ${styles.cv}`}>
              <img src={cvImage} alt="CV" className={styles.objectImage} />
            </Link>

            {/* Front / closer to the viewer */}

            <Link to="/designs" className={`${styles.object} ${styles.tablet}`}>
              <img
                src={tabletImage}
                alt="Drawing tablet"
                className={styles.objectImage}
              />
            </Link>

            <Link to="/apps" className={`${styles.object} ${styles.phone}`}>
              <img
                src={phoneImage}
                alt="Phone"
                className={styles.objectImage}
              />
            </Link>
          </div>
        </div>

        <Hands>
          <LeftHand />
          <RightHand />
        </Hands>
      </div>
    </main>
  );
}
