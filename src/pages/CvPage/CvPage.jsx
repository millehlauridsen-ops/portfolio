import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./CvPage.module.css";

import cvPdf from "../../assets/CV/MilleLauridsen_CV.pdf";
import cvImage from "../../assets/CV/MilleLauridsen_CV.png";

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

        <section className={styles.cvSection}>
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
        </section>
      </div>
    </PageLayout>
  );
}
