import PageLayout from "../../../components/PageLayout/PageLayout";
import styles from "./SpotifyShortsPage.module.css";

import barselonaVideo from "../../../assets/designprojects/Barselona_minEnesteRus.mp4";
import emilKruseVideo from "../../../assets/designprojects/EmilKruse_hot.mp4";

export default function SpotifyShortsPage() {
  return (
    <PageLayout title="Spotify Shorts">
      <div className={styles.spotifyPage}>
        {/* SECTION 1 — INTRO */}
        <section className={styles.introSection}>
          <div className={styles.introLeft}>
            <p className={styles.eyebrow}>CREATIVE CONTENT · 2026</p>

            <h2>
              Visuals for
              <br />
              Spotify
            </h2>
          </div>

          <div className={styles.introRight}>
            <p>
              Two short visualizations created for songs on Spotify while
              learning Adobe After Effects.
            </p>

            <p>
              The goal was to experiment with movement, timing and visual
              storytelling while getting familiar with a completely new program.
            </p>

            <div className={styles.projectInfo}>
              <div>
                <span>TYPE</span>
                <p>Motion design</p>
              </div>

              <div>
                <span>TOOLS</span>
                <p>After Effects</p>
              </div>

              <div>
                <span>YEAR</span>
                <p>2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className={styles.videoSection}>
          <div className={styles.processText}>
            <p className={styles.darkEyebrow}>01 · Barselona</p>

            <h2>Min eneste rus</h2>

            <p>
              For this visual I focused on learning the basics of After Effects
              and experimenting with how movement can support the feeling and
              rhythm of a song.
            </p>

            <p>
              I worked with timing, composition and transitions while exploring
              how to enhance the visual storytelling in just a few seconds.
            </p>

            <p>
              <a href="https://open.spotify.com/track/7mrhoZ9D53DgtlutlmTOYE?si=4820c9c2b0c24db4">
                Link to song
              </a>
            </p>
          </div>

          <div className={styles.videoContainer}>
            <video
              src={barselonaVideo}
              controls
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className={styles.videoSection}>
          <div className={styles.processText}>
            <p className={styles.darkEyebrow}>02 · Emil Kruse</p>

            <h2>Hot</h2>

            <p>
              In the second animation I wanted to push the visual expression
              further and try a different approach to movement and pacing.
            </p>

            <p>
              Having already learned some of the basic tools, I could focus more
              on experimenting and creating an animation that matched the
              personality of the song.
            </p>

            <p>
              Also I wanted to try and animate a drawn figure - so I did that on
              photoshop
            </p>

            <p>
              <a href="https://open.spotify.com/track/6ZrzenY5yEFciqcIUmZSYS?si=4ed3a7118f8b4b82">
                Link to song
              </a>
            </p>
          </div>

          <div className={styles.videoContainer}>
            <video
              src={emilKruseVideo}
              controls
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
