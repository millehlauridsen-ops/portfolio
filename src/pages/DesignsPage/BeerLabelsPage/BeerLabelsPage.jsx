import { useState } from "react";

import PageLayout from "../../../components/PageLayout/PageLayout";
import styles from "./BeerLabelsPage.module.css";

import beerLabel1 from "../../../assets/designprojects/freespirit1.png";
import beerLabel2 from "../../../assets/designprojects/freespirit2.png";
import beerLabel3 from "../../../assets/designprojects/smokedrebel1.png";
import beerLabel4 from "../../../assets/designprojects/smokedrebel2.png";
import beerLabel5 from "../../../assets/designprojects/darkmanifest1.png";
import beerLabel6 from "../../../assets/designprojects/darkmanifest2.png";

const carouselImages = [
  beerLabel1,
  beerLabel2,
  beerLabel3,
  beerLabel4,
  beerLabel5,
  beerLabel6,
];

export default function BeerLabelsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImages() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= carouselImages.length - 2) {
        return 0;
      }

      return prevIndex + 2;
    });
  }

  function previousImages() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return carouselImages.length - 2;
      }

      return prevIndex - 2;
    });
  }

  return (
    <PageLayout title="Beer Labels">
      <div className={styles.beerLabelsPage}>
        {/* SECTION 1 */}
        <section className={styles.introSection}>
          <div className={styles.introLeft}>
            <p className={styles.eyebrow}>CREATIVE CONTENT · 2026</p>

            <h2>
              Beer labels for
              <br />
              Anarkist
            </h2>
          </div>

          <div className={styles.introRight}>
            <p>
              A design project created during the Creative Content course, where
              I worked with beer label design for the Danish brand Anarkist.
            </p>

            <p>
              In this project i focused on trying to capture the essence of the
              brand and its products, while also creating a cohesive visual
              identity. It was a little challenging as 'Anarkist' has a very
              unique and bold style, but I enjoyed the process of experimenting
              with a different style than I am used to.
            </p>

            <p>
              *AI was used as a help to figure out the type of beer I wanted to
              design labels for
            </p>

            <div className={styles.projectInfo}>
              <div>
                <span>TYPE</span>
                <p>Beer label design</p>
              </div>

              <div>
                <span>TOOLS</span>
                <p>Illustrator · Photoshop · Dimensions</p>
              </div>

              <div>
                <span>YEAR</span>
                <p>2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CAROUSEL */}
        <section className={styles.carouselSection}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${(currentIndex / 2) * 100}vw)`,
            }}
          >
            {carouselImages.map((image, index) => (
              <div
                className={`${styles.slide} ${
                  index % 2 === 0 ? styles.smallSlide : styles.largeSlide
                }`}
                key={index}
              >
                <img src={image} alt={`Beer label design ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            className={`${styles.carouselButton} ${styles.previousButton}`}
            onClick={previousImages}
            aria-label="Previous images"
          >
            ←
          </button>

          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={nextImages}
            aria-label="Next images"
          >
            →
          </button>
        </section>

        {/* SECTION 3 */}
        <section className={styles.sectionThree}>
          <div className={styles.sectionThreeContent}>
            <h2>Nothing is ever too hard to learn - is my mantra</h2>
            <br />
            <p>
              In this process I worked with Photoshop and Illustrator for the
              very first time. It took time and energy to learn the tools and
              how to use them. But with patience and practice, I was able to
              create a final product that I am proud of.
            </p>

            <p>
              It was also my first time drawing on a tablet, which was a new
              experience for me. I've never been very good at drawing, but I
              wanted to challenge myself and try something new.
            </p>

            <p>
              For me it's about pushing boundaries and exploring new creative
              avenues. This project allowed me to step outside my comfort zone
              and grow as a designer.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
