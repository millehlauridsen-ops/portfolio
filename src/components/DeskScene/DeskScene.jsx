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

        {/* Portfolio intro */}
        <div className={styles.portfolioIntro}>
          <p>
            This is my portfolio - click around to see my projects and
            investigate
          </p>
        </div>

        {/* Hi Mille note */}
        <div className={styles.helloNote}>
          <p className={styles.helloText}>Hi! I&apos;m Mille</p>

          <svg
            className={styles.helloArrow}
            viewBox="0 0 180 140"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="helloArrowHead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path
                  d="M 0 0 L 8 5 L 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <path
              d="M15 20 C95 10, 150 55, 145 112"
              className={styles.arrowLine}
              markerEnd="url(#helloArrowHead)"
            />
          </svg>
        </div>

        {/* Me */}
        <Link to="/me" className={styles.character}>
          <img src={meImage} alt="Me" className={styles.objectImage} />
        </Link>

        {/* Desk */}
        <div className={styles.desk}>
          <div className={styles.deskSurface}>
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
