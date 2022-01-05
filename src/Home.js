import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import NavbarArea from "./Navbar";
import styles from "./css-modules/Home.module.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>
        <title>Ian Wanjohi | Home</title>
      </Helmet>

      <ScrollToTop smooth color="#BADAE8" />
      <NavbarArea />
      {/* <img src="/assets/Oreti.png" height={100}></img> */}
      <div className={styles.desContainer}>
        <img src="/assets/des1.png" className={styles.des1} alt=""></img>
      </div>

      <section className={styles.heroSection} id="section1">
        <div className={styles.heroContainer}>
          <img
            src="/assets/i1.jpg"
            alt="Portrait Shot of Ian Wanjohi"
            className={styles.mainImg}
          ></img>
          <h1 className={styles.helloTitle}>
            Hello 👋🏾 I'm Ian Wanjohi
          </h1>
          <h3 className={styles.jobTitle}>
            User Experience and Product Designer
          </h3>
          <p className={styles.missionText}>
            Specializing in using human-centered design and technology to create
            sustainable, data-driven solutions that positively impact people's lives.
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="https://drive.google.com/file/d/1vFfdLAglkU9s6Af85Eo99tvCuOsf-Zux/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.resumeBtn}>View Resume</button>
            </a>
            <a
              href="https://calendly.com/iwanjo/meet"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.calendlyBtn}>
                Let's chat on Calendly
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.portfolio} id="section3">
        <div className={styles.titleArea}>
          <h1 className={styles.latestTitle}>Latest Projects</h1>
          <h3 className={styles.caseTitle}>Case Studies & Development</h3>
        </div>

        <div className={styles.projectBlock}>
          <div className={styles.leftProject}>
            <img
              src="../assets/aura-banner.jpg"
              className={styles.bannerImg}
              id={styles.auraBanner}
              alt="Aura Banner"
            ></img>
          </div>

          <div className={styles.rightProject}>
            <h1 className={styles.projectTitle}>Aura</h1>
            <p className={styles.projectDescription}>
              Aura is a mobile application that offers a wide range of affordable
              mental healthcare support services to students and the general
              community, including affordable therapy sessions, community
              support spaces, and a chatbot.
            </p>
            <Link to="/">
              <button className={styles.resumeBtn}>Coming Soon</button>
            </Link>
            <a
              href="https://github.com/iwanjo/aura_flutter"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.calendlyBtn}>GitHub Repo</button>
            </a>
          </div>
        </div>

        <div className={styles.projectBlock}>
          <div className={styles.leftProject}>
            <img
              src="../assets/Intouch-banner.png"
              className={styles.bannerImg}
              id={styles.auraBanner}
              alt="InTouch Banner"
            ></img>
          </div>

          <div className={styles.rightProject}>
            <h1 className={styles.projectTitle}>InTouch Finance Platform</h1>
            <p className={styles.projectDescription}>
              An online platform enabling early stage ventures and entrepreneurs in Africa access to funding/investment and training opportunities. The platform also provides investment partners with a view of African ventures they can invest in.
            </p>
            <Link to="/">
              <button className={styles.resumeBtn}>Coming Soon</button>
            </Link>
           
          </div>
        </div>

        <div className={styles.projectBlock}>
          <div className={styles.leftProject}>
            <img
              src="../assets/sankofa-banner.png"
              className={styles.bannerImg}
              alt="Sankofa Banner"
            ></img>
          </div>

          <div className={styles.rightProject}>
            <h1 className={styles.projectTitle}>Sankofa</h1>
            <p className={styles.projectDescription}>
              Sankofa is a mobile application that uses geolocation to tell
              consumers the nearest drop off point (charity homes, recycling
              company or thrift company) for their unwanted clothes.{" "}
            </p>
            <Link to="/sankofa">
              <button className={styles.resumeBtn}>View Project</button>
            </Link>
          </div>
        </div>

        <div className={styles.projectBlock}>
          <div className={styles.leftProject}>
            <img
              src="../assets/dk-banner.png"
              className={styles.bannerImg}
              alt="Discover Kenya Banner"
            />
          </div>

          <div className={styles.rightProject}>
            <h1 className={styles.projectTitle}>Discover Kenya</h1>
            <p className={styles.projectDescription}>
              Discover Kenya is a mobile application that allows tourism/safari
              companies, creative agencies and photographers to share visual
              content of Kenya and create a community of artistic contributors.
            </p>
            <Link to="/discover-kenya">
              <button className={styles.resumeBtn}>View Project</button>
            </Link>
            <a
              href="https://github.com/iwanjo/discover-kenya-v2"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.calendlyBtn}>GitHub Repo</button>
            </a>
          </div>
        </div>

        <div className={styles.projectBlock}>
          <div className={styles.leftProject}>
            <img
              src="../assets/foresight-banner.png"
              className={styles.bannerImg}
              alt="Foresight Banner"
            ></img>
          </div>

          <div className={styles.rightProject}>
            <h1 className={styles.projectTitle}>
              Foresight Agricultural Insights
            </h1>
            <p className={styles.projectDescription}>
              Foresight is an agri-tech start-up that uses agricultural drone
              technology to determine crop quality and accurately estimate crop
              yields, providing a precise method of obtaining crop forecasts in
              the age of changing weather conditions.{" "}
            </p>
            <Link to="/foresight">
              <button className={styles.resumeBtn}>View Project</button>
            </Link>
            <a
              href="https://foresight-africa.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.calendlyBtn}>Website Link</button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="section4">
        <div className={styles.contactContainer}>
          <h1 className={styles.contactTitle}>Let's get in touch</h1>
          <p className={styles.contactText}>
            Keen to collaborate and work on impactful projects💻. Let's connect
            via{" "}
            <a href="mailto:iwanjohi11@gmail.com" className={styles.emailText}>
              Email
            </a>
          </p>
          <div className={styles.socialCircles}>
            <div className={styles.linkedinCircle}>
              <a
                href="https://www.linkedin.com/in/ian-wanjohi/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/linkedin-logo.png"
                  alt="Ian Wanjohi's LinkedIn"
                  className={styles.linkedinImage}
                ></img>
              </a>
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.dribbbleCircle}>
              <a
                href="https://dribbble.com/ianwanjohi"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/dribbble-logo.png"
                  alt="Ian Wanjohi's Dribbble"
                  className={styles.dribbbleImage}
                ></img>
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.githubCircle}>
              <a
                href="https://github.com/iwanjo"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github-logo.png"
                  alt="Ian Wanjohi's Github"
                  className={styles.githubImage}
                ></img>
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className={styles.copyRight}>
            <p>
              Copyright &copy; 2021 Designed and developed with care by Ian
              Wanjohi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
