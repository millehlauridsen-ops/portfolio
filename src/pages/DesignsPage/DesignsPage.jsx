import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./DesignsPage.module.css";
import LottieModule from "lottie-react";
import designHeroAnimation from "../../assets/animations/prop-carrusel.json";

import appDesign from "../../assets/designprojects/beerlabels.png";
import posterDesign from "../../assets/designprojects/movieposter.png";
import visualDesign from "../../assets/designprojects/enesterus.png";

import { Link } from "react-router";

const projects = [
  {
    number: "01",
    category: "Beer Labels",
    title: "Beer labels for 'Anarkist'",
    description:
      "Beer-label designs for the danish brand 'Anarkist'. A project for the 'Creative Content' course - learned Adobe Photoshop and Illustrator.",
    image: appDesign,
    link: "/designs/beer-labels",
  },
  {
    number: "02",
    category: "Poster design",
    title: "Movie Poster - own design",
    image: posterDesign,
    description:
      "A movie poster design showing my own fears and thoughts at the time of the project. Project for the 'Creative Content' course.",
    link: "/designs/movie-poster",
  },
  {
    number: "03",
    category: "Spotify shorts",
    title: "Visuals for songs on Spotify",
    description:
      "Learning adobe After Effects with two short visualizations to my favorite songs at the time.",
    image: visualDesign,
    link: "/designs/spotify-shorts",
  },
];

export default function DesignsPage() {
  const Lottie = LottieModule.default;
  return (
    <PageLayout title="Designs">
      <div className={styles.designsPage} id="start">
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>DESIGN PORTFOLIO · 2026</p>

            <h2>
              My workbook of
              <br />
              <span>creative design projects</span>
              <br />
            </h2>

            <p className={styles.intro}>
              A selection of my work with graphic design, visual identity,
              branding and digital experience.
            </p>

            <a href="#projects" className={styles.heroButton}>
              Explore projects
              <span>↓</span>
            </a>
          </div>

          <div className={styles.heroVisual}>
            <Lottie
              animationData={designHeroAnimation}
              loop={true}
              autoplay={true}
              className={styles.heroAnimation}
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.projects} id="projects">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>SELECTED WORK</p>
              <h2>Adobe projects</h2>
            </div>

            <p>
              Here are some of the projects I have worked on during my studies
              and in my spare time.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <Link
                to={project.link}
                className={styles.projectLink}
                key={project.number}
              >
                <article className={styles.projectCard}>
                  <div
                    className={styles.projectImage}
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  >
                    <span className={styles.projectNumber}>
                      {project.number}
                    </span>
                  </div>

                  <div className={styles.projectContent}>
                    <p className={styles.projectCategory}>{project.category}</p>

                    <div className={styles.projectTitle}>
                      <h3>{project.title}</h3>
                      <span>↗</span>
                    </div>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className={styles.skills}>
          <div className={styles.skillsHeading}>
            <p className={styles.eyebrow}>WHAT I DO</p>

            <h2>
              From idea to
              <br />
              visual solution.
              <br />
            </h2>

            <h3>
              {" "}
              <br />
              I get very motivated by problem-solving
              <br />
              and finding creative solutions.
            </h3>
          </div>

          <div className={styles.skillsList}>
            <div className={styles.skill}>
              <span>01</span>

              <h3>Visual identity</h3>

              <p>
                Looking, researching and getting a feel for how the brand
                visually presents itself
              </p>
            </div>

            <div className={styles.skill}>
              <span>02</span>

              <h3>Brainstorming</h3>

              <p>
                Brainstorming ideas and concepts for visual solutions. What do I
                want to do? What is the message? How do I want to communicate
                it?
              </p>
            </div>

            <div className={styles.skill}>
              <span>03</span>

              <h3>Creating</h3>

              <p>
                I like to get into the nitty gritty of things. I enjoy
                experimenting with different techniques and materials to create
                unique and engaging designs. Nothing is ever too difficult to
                learn.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <p className={styles.eyebrow}>MORE TO EXPLORE</p>

          <a href="#start" className={styles.ctaButton}>
            Back to top
            <span>↑</span>
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
