import styles from "./AppProject.module.css";

export default function AppProject({
  title,
  projectDescription,
  conceptDescription,
  processDescription,
  designDescription,
  figmaUrl,
  liveUrl,
}) {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&scaling=scale-down-width&url=${encodeURIComponent(
    figmaUrl,
  )}`;

  return (
    <section className={styles.project}>
      <div className={styles.topSection}>
        <div className={styles.previewColumn}>
          <h3>Figma Prototype</h3>

          <div className={styles.phonePreview}>
            <iframe
              src={embedUrl}
              title={`${title} prototype`}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.info}>
          <h2>{title}</h2>

          <div className={styles.introSection}>
            <h3>About the project</h3>
            <p>{projectDescription}</p>
          </div>

          <div className={styles.projectMeta}>
            <div>
              <span>Prototype</span>
              <strong>Figma</strong>
            </div>

            <div>
              <span>Development</span>
              <strong>React / Web App</strong>
            </div>
          </div>

          <div className={styles.links}>
            <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
              Open Figma design system →
            </a>

            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Open GitHub Repository →
            </a>
          </div>

          <a href="#project-details" className={styles.readMore}>
            <span>Read more</span>
            <span className={styles.arrow}>↓</span>
          </a>
        </div>

        <div className={styles.previewColumn}>
          <h3>Coded App</h3>

          <div className={styles.livePreview}>
            <iframe src={liveUrl} title={`${title} live app`} loading="lazy" />
          </div>
        </div>
      </div>

      <div className={styles.details} id="project-details">
        <article className={styles.detailSection}>
          <h3>...PubHub?</h3>
          <p>{designDescription}</p>
        </article>

        <article className={styles.detailSection}>
          <h3>Concept</h3>
          <p>{conceptDescription}</p>
        </article>

        <article className={styles.detailSection}>
          <h3>Process</h3>
          <p>{processDescription}</p>
        </article>
      </div>
    </section>
  );
}
