import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./MePage.module.css";

import myInterview from "../../assets/me/myinterview.MOV";

const qualities = [
  "Problem-solving motivated",
  "Can-do attitude",
  "Feedback-oriented",
  "Thrive in challenges",
  "Structured",
  "Communicative",
  "Detail-oriented",
  "Eager to learn",
];

export default function MePage() {
  return (
    <PageLayout title="Hi! I'm Mille">
      <div className={styles.mePage}>
        <section className={styles.topSection}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>A LITTLE ABOUT ME</p>

            <h2>
              Nothing is ever
              <br />
              too difficult to learn
            </h2>

            <p className={styles.introText}>
              When I started at MDU i'd never coded or designed anything before.
              I shot straight into the deep end and learned everything from
              scratch. I love to learn new things, and I thrive in challenges.
              Here I talk a little about my strengths and weaknesses - how I got
              to the world of tech and what I bring to the table
            </p>
          </div>

          <div className={styles.videoWrapper}>
            <video
              className={styles.interviewVideo}
              src={myInterview}
              controls
              playsInline
            />
          </div>
        </section>

        <section className={styles.qualitiesSection}>
          {qualities.map((quality) => (
            <div className={styles.quality} key={quality}>
              {quality}
            </div>
          ))}
        </section>
      </div>
    </PageLayout>
  );
}
