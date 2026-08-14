import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./CvPage.module.css";

import cvPdf from "../../assets/CV/MilleLauridsen_CV.pdf";
import cvImage from "../../assets/CV/MilleLauridsen_CV.png";
import aiDiploma from "../../assets/CV/diplom-masterclass.jpg";

export default function CvPage() {
  return (
    <PageLayout title="CV">
      <div className={styles.cvPage}>
        <div className={styles.topBar}>
          <a
            href={cvPdf}
            download="MilleLauridsen_CV.pdf"
            className={styles.downloadButton}
          >
            <span>Download CV</span>
            <span className={styles.downloadIcon}>↓</span>
          </a>
        </div>

        <section className={styles.cvArea}>
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvPaper}
            aria-label="Open CV as PDF"
          >
            <img
              src={cvImage}
              alt="Mille Lauridsen CV"
              className={styles.cvImage}
            />
          </a>

          <div className={styles.moreSection}>
            <p>Oh, and one more thing</p>

            <a
              href="#ai-diploma"
              className={styles.moreArrow}
              aria-label="Scroll to AI diploma"
            >
              ↓
            </a>
          </div>
        </section>

        <section className={styles.diplomaSection} id="ai-diploma">
          <div className={styles.diplomaHeading}>
            <p className={styles.eyebrow}>EXTRA LEARNING</p>
            <h2>AI Masterclass</h2>
          </div>

          <div className={styles.diplomaCard}>
            <img
              src={aiDiploma}
              alt="Diploma from AI masterclass by Business Danmark"
              className={styles.diplomaImage}
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
