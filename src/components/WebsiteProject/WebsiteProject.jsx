import styles from "./WebsiteProject.module.css";

export default function WebsiteProject({
  title,
  description,
  figmaUrl,
  liveUrl,
  reverse = false,
}) {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&scaling=scale-down-width&url=${encodeURIComponent(
    figmaUrl,
  )}`;

  return (
    <section className={`${styles.project} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.preview}>
        <iframe
          src={embedUrl}
          title={`${title} prototype`}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h2>{title}</h2>

        <p>{description}</p>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
          >
            Se live website →
          </a>
        )}
      </div>
    </section>
  );
}
