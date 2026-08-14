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
      <div className={styles.previews}>
        {/* FIGMA */}
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

        {/* INFO */}
        <div className={styles.info}>
          <h2>{title}</h2>

          <p>{projectDescription}</p>
          <p>{conceptDescription}</p>
          <p>{processDescription}</p>
          <p>{designDescription}</p>

          <div className={styles.projectMeta}>
            <div>
              <span>Prototype</span>
              <strong>Figma</strong>
            </div>

            <div>
              <span>Development</span>
              <strong>React / Web app</strong>
            </div>
          </div>

          <div className={styles.links}>
            <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
              Open Figma designsystem →
            </a>

            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Open Github Repository →
            </a>
          </div>
        </div>

        {/* CODED APP */}
        <div className={styles.previewColumn}>
          <h3>Coded App</h3>

          <div className={styles.livePreview}>
            <iframe src={liveUrl} title={`${title} live app`} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
