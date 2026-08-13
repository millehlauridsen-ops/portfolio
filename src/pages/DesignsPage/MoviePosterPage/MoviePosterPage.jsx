import PageLayout from "../../../components/PageLayout/PageLayout";
import styles from "./MoviePosterPage.module.css";

import moviePoster1 from "../../../assets/designprojects/movieposter1.png";
import moviePoster2 from "../../../assets/designprojects/movieposter.png";

export default function MoviePosterPage() {
  return (
    <PageLayout title="Movie Poster">
      <div className={styles.moviePosterPage}>
        {/* SECTION 1 — INTRO */}
        <section className={styles.introSection}>
          <div className={styles.introLeft}>
            <p className={styles.eyebrow}>CREATIVE CONTENT · 2026</p>

            <h2>
              Movie poster
              <br />
              design
            </h2>
          </div>

          <div className={styles.introRight}>
            <p>
              A movie poster project created during the Creative Content course.
            </p>

            <p>
              The poster is based on my own thoughts and fears at the time of
              the project: January 2026. Trump was threatening to "take"
              Greenland with force if needed, and it completely consumed my
              thoughts. I wanted to turn my fears and thoughts into a visual
              expression and experiment with composition, imagery and
              atmosphere.
            </p>

            <div className={styles.projectInfo}>
              <div>
                <span>TYPE</span>
                <p>Poster design</p>
              </div>

              <div>
                <span>TOOLS</span>
                <p>Photoshop · Illustrator</p>
              </div>

              <div>
                <span>YEAR</span>
                <p>2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — IMAGES */}
        <section className={styles.imageSection}>
          <div className={styles.smallImage}>
            <img src={moviePoster1} alt="Movie poster project" />
          </div>

          <div className={styles.largeImage}>
            <img src={moviePoster2} alt="Movie poster project detail" />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className={styles.sectionThree}></section>
      </div>
    </PageLayout>
  );
}
