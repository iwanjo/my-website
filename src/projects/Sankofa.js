import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/Sankofa.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";

function Sankofa() {
  return (
    <>
      <ScrollToTop smooth color="#41a695" />

      <Helmet>
        <title>Sankofa | Ian Wanjohi</title>
      </Helmet>
      <ProjectsNavbar />

      <section className={styles.heroSection} id="section1">
        <div className={styles.heroContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.projectTitle}>Sankofa</h1>
            <p className={styles.projectText}>
              Designing an eco-friendly mobile solution to help consumers in
              Ghana properly dispose and gain money from their secondhand
              clothing .
            </p>
            <button className={styles.tags}>In Development</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className={styles.tags}>Mobile Application</button>
          </div>

          <div className={styles.rightContainer}>
            <img
              src="../assets/sankofa-project-banner.png"
              loading="eager"
              alt="Sankofa Project Banner"
              className={styles.protoImg}
            />
          </div>
        </div>
      </section>

      <section className={styles.challenge} id="section2">
        <div className={styles.challengeDiv}>
          <h1 className={styles.scopeTitle}>Project Scope</h1>
          <div className={styles.cardGroup}>
            <div className={styles.card1}>
              <div className={styles.centerImg}>
                <img src="../assets/role.png" alt="Role Logo" />
              </div>
              <h5>Role</h5>
              <p className={styles.cardText}>UX-UI Designer</p>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.card2}>
              <div className={styles.centerImg}>
                <img src="../assets/foresight-computer.png" alt="Tools Logo" />
              </div>
              <h5>Tools Used</h5>
              <p className={styles.cardText}>Figma & Miro</p>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.card3}>
              <div className={styles.centerImg}>
                <img src="../assets/foresight-folder.png" alt="Project Logo" />
              </div>
              <h5>Project Type</h5>
              <p className={styles.cardText}>
                Internship Project @{" "}
                <a href="https://yux.design/" target="_blank" rel="noreferrer">
                  YUX Design<br></br>
                </a>
                    with Sasha Ofori and Alaba Badiru
              </p>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.card4}>
              <div className={styles.centerImg}>
                <img
                  src="../assets/foresight-calendar.png"
                  alt="Calendar Logo"
                />
              </div>
              <h5>Duration</h5>
              <p className={styles.cardText}>April 2021 - August 2021</p>
            </div>
          </div>
          <h1 className={styles.challengeTitle}>Context</h1>
          <p className={styles.challengeText}>
            The second-hand clothing industry provides jobs for about 35000
            traders and contributes millions of dollars annually to Ghana's GDP
            within the largest clothing market in Accra called Kantamanto.
            According to the OR Foundation, approximately 1 million pounds of
            clothing waste end up at the Kpone landfill sites from the
            Kantamanto market. These wastes are usually unsold clothes by market
            traders, which end up in a pile of garbage in the market at the end
            of each day. The research goal was to understand the perceptions of
            the different stakeholders within the flow of secondhand clothing
            within the Ghanaian market and the ecological impact at each stage.
            <br />
            <br />
            According to Mathilde Charpail of Sustain Your Style, a website that
            educates users on sustainable fashion choices, fashion is the
            second-largest polluter in the world. Each stage of the life cycle
            of clothes has a different negative impact on the environment, as
            illustrated below.
          </p>

          <div className={styles.imgDiv}>
            <img
              src="../assets/tourist-graph.jpeg"
              className={styles.challengeImg}
              alt="Graph showcasing tourism numbers differences between 2019 and 2020."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sankofa;
