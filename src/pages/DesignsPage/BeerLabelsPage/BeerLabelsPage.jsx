import { useState } from "react";

import PageLayout from "../../../components/PageLayout/PageLayout";
import styles from "./BeerLabelsPage.module.css";

import beerLabel1 from "../../../assets/designprojects/freespirit1.png";
import beerLabel2 from "../../../assets/designprojects/freespirit2.png";
import beerLabel3 from "../../../assets/designprojects/smokedrebel1.png";
import beerLabel4 from "../../../assets/designprojects/smokedrebel2.png";
import beerLabel5 from "../../../assets/designprojects/darkmanifest1.png";
import beerLabel6 from "../../../assets/designprojects/darkmanifest2.png";

const desktopCarouselImages = [
  beerLabel1,
  beerLabel2,
  beerLabel3,
  beerLabel4,
  beerLabel5,
  beerLabel6,
];

const primaryMobileImages = [beerLabel1, beerLabel3, beerLabel5];

const secondaryMobileImages = [beerLabel2, beerLabel4, beerLabel6];

export default function BeerLabelsPage() {
  const [desktopIndex, setDesktopIndex] = useState(0);

  const [primaryMobileIndex, setPrimaryMobileIndex] = useState(0);
  const [secondaryMobileIndex, setSecondaryMobileIndex] = useState(0);

  function nextDesktopImages() {
    setDesktopIndex((prevIndex) => {
      if (prevIndex >= desktopCarouselImages.length - 2) {
        return 0;
      }

      return prevIndex + 2;
    });
  }

  function previousDesktopImages() {
    setDesktopIndex((prevIndex) => {
      if (prevIndex === 0) {
        return desktopCarouselImages.length - 2;
      }

      return prevIndex - 2;
    });
  }

  function nextPrimaryImage() {
    setPrimaryMobileIndex((prevIndex) => {
      if (prevIndex >= primaryMobileImages.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  }

  function previousPrimaryImage() {
    setPrimaryMobileIndex((prevIndex) => {
      if (prevIndex === 0) {
        return primaryMobileImages.length - 1;
      }

      return prevIndex - 1;
    });
  }

  function nextSecondaryImage() {
    setSecondaryMobileIndex((prevIndex) => {
      if (prevIndex >= secondaryMobileImages.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  }

  function previousSecondaryImage() {
    setSecondaryMobileIndex((prevIndex) => {
      if (prevIndex === 0) {
        return secondaryMobileImages.length - 1;
      }

      return prevIndex - 1;
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
                <p>Illustrator · Photoshop</p>
              </div>

              <div>
                <span>YEAR</span>
                <p>2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP CAROUSEL */}

        <section className={styles.desktopCarouselSection}>
          <div
            className={styles.desktopCarouselTrack}
            style={{
              transform: `translateX(-${(desktopIndex / 2) * 100}vw)`,
            }}
          >
            {desktopCarouselImages.map((image, index) => (
              <div
                className={`${styles.desktopSlide} ${
                  index % 2 === 0
                    ? styles.desktopSmallSlide
                    : styles.desktopLargeSlide
                }`}
                key={index}
              >
                <img src={image} alt={`Beer label design ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            className={`${styles.carouselButton} ${styles.previousButton}`}
            onClick={previousDesktopImages}
            aria-label="Previous beer label designs"
          >
            ←
          </button>

          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={nextDesktopImages}
            aria-label="Next beer label designs"
          >
            →
          </button>
        </section>

        {/* MOBILE CAROUSELS */}

        <div className={styles.mobileCarousels}>
          <section className={styles.mobileCarouselBlock}>
            <div className={styles.mobileCarouselHeading}>
              <p className={styles.eyebrow}>THE LABELS</p>
              <h2>Final label designs</h2>
            </div>

            <div className={styles.mobileCarouselSection}>
              <div
                className={styles.mobileCarouselTrack}
                style={{
                  transform: `translateX(-${primaryMobileIndex * 100}%)`,
                }}
              >
                {primaryMobileImages.map((image, index) => (
                  <div className={styles.mobileSlide} key={index}>
                    <img src={image} alt={`Beer label design ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.previousButton}`}
                onClick={previousPrimaryImage}
                aria-label="Previous final label design"
              >
                ←
              </button>

              <button
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={nextPrimaryImage}
                aria-label="Next final label design"
              >
                →
              </button>
            </div>
          </section>

          <section className={styles.mobileCarouselBlock}>
            <div className={styles.mobileCarouselHeading}>
              <p className={styles.eyebrow}>THE DETAILS</p>
              <h2>See them up close</h2>
            </div>

            <div className={styles.mobileCarouselSection}>
              <div
                className={styles.mobileCarouselTrack}
                style={{
                  transform: `translateX(-${secondaryMobileIndex * 100}%)`,
                }}
              >
                {secondaryMobileImages.map((image, index) => (
                  <div className={styles.mobileSlide} key={index}>
                    <img src={image} alt={`Beer label detail ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.previousButton}`}
                onClick={previousSecondaryImage}
                aria-label="Previous beer label detail"
              >
                ←
              </button>

              <button
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={nextSecondaryImage}
                aria-label="Next beer label detail"
              >
                →
              </button>
            </div>
          </section>
        </div>

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
