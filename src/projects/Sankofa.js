import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/Sankofa.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";

class Sankofa extends React.Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  render() {
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
                Ghana properly dispose of and earn money from their secondhand
                clothing
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
                  <img
                    src="../assets/foresight-computer.png"
                    alt="Tools Logo"
                  />
                </div>
                <h5>Tools Used</h5>
                <p className={styles.cardText}>Figma & Miro</p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card3}>
                <div className={styles.centerImg}>
                  <img
                    src="../assets/foresight-folder.png"
                    alt="Project Logo"
                  />
                </div>
                <h5>Project Type</h5>
                <p className={styles.cardText}>
                  Internship Project @{" "}
                  <a
                    href="https://yux.design/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
              The second-hand clothing industry provides jobs for about 35,000
              traders and contributes millions of dollars annually to Ghana's
              GDP within the largest clothing market in Accra called Kantamanto.
              According to the OR Foundation, approximately 1 million pounds of
              clothing waste end up at the Kpone landfill sites from the
              Kantamanto market. These wastes are usually unsold clothes by
              market traders, which end up in a pile of garbage in the market at
              the end of each day. The research goal was to understand the
              perceptions of the different stakeholders within the flow of
              secondhand clothing within the Ghanaian market and the ecological
              impact at each stage.
              <br />
              <br />
              According to{" "}
              <a
                href="https://www.sustainyourstyle.org/old-environmental-impacts"
                target="_blank"
                rel="noreferrer"
              >
                Mathilde Charpail of Sustain Your Style
              </a>
              , a website that educates users on sustainable fashion choices,
              fashion is the second-largest polluter in the world. Each stage of
              the life cycle of clothes has a different negative impact on the
              environment, as illustrated below.
            </p>

            <div className={styles.imgDiv}>
              <img
                src="../assets/sankofa-fashion.png"
                className={styles.challengeImg}
                alt="Clothes lifecycle and their impact on the environment"
              />
            </div>
          </div>
        </section>
        <div className={styles.problemContainer}>
          <h2 className={styles.problemTitle}>Problem Statement</h2>
          <img src="../assets/problem-icon.png" alt="Problem Icon" />
          <p className={styles.problemText}>
            To understand the flow and perception of various stakeholders in the
            secondhand clothing chain and understand its impact on the
            environment in Ghana.
          </p>
        </div>

        <section className={styles.design} id="section3">
          <div className={styles.designContainer}>
            <h1 className={styles.designTitle}>Design Process</h1>
            <h5 className={styles.researchTitle}>
              Tools used in Design Process
            </h5>

            <div className={styles.cardGroup}>
              <div className={styles.card1}>
                <div className={styles.centerImg}>
                  <img src="../assets/miro.svg" alt="Miro Logo" />
                </div>
                <h5>Miro</h5>
                <p className={styles.cardText}>
                  To facilitate collaborative remote working and document info.
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card2}>
                <div className={styles.centerImg}>
                  <img src="../assets/notion.svg" alt="Notion Logo" />
                </div>
                <h5>Notion</h5>
                <p className={styles.cardText}>
                  For organising detailed transcripts of interviews.
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card3}>
                <div className={styles.centerImg}>
                  <img src="../assets/figma.png" alt="Project Logo" />
                </div>
                <h5>Figma</h5>
                <p className={styles.cardText}>
                  For designing the wireframes, high-fidelity interfaces and
                  prototypes.
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card4}>
                <div className={styles.centerImg}>
                  <img src="../assets/google-docs.png" alt="Calendar Logo" />
                </div>
                <h5>Google Docs</h5>
                <p className={styles.cardText}>
                  Creation of interview guides and documenting insights.
                </p>
              </div>
            </div>

            {/* Research Methodology */}
            <h5 className={styles.researchTitle}>Research Methodology</h5>
            <div className={styles.methodologyContainer}>
              <div className={styles.methodologyLeft}>
                <p>
                  In the research phase of this project we utilised qualitative
                  research techniques such as:{" "}
                </p>
                <ul>
                  <li>Semi-Structured Interviews</li>
                  <li>Shadowing</li>
                  <li>Observation</li>
                </ul>

                <p>
                  <strong>Research Goal: </strong>To understand the perceptions
                  of the different stakeholders within the flow of secondhand
                  clothing within the Ghanaian market and the ecological impact
                  at each stage. In our approach, we developed tailored
                  questions to understand the thoughts and perceptions of bale
                  retailers, bale selectors and consumers. The research shed a
                  light on the difficulties consumers experience when disposing
                  their secondhand clothes.
                </p>

                <p>
                  Due to the project's nature, the onsite research involved
                  different categories of participants. Three main stakeholders were
                  identified within 4 different locations, for a total of 11
                  interviews shown below{" "}
                </p>

                <div className={styles.methodologyDiv}>
                  <img
                    src="assets/sankofa-research.png"
                    loading="lazy"
                    className={styles.methodologyImg}
                    alt="Interview Structure"
                  />
                </div>
              </div>

              <div className={styles.methodologyRight}></div>
            </div>

            {/* Proto Personas */}
            <div className={styles.defineContainer}>
              <div className={styles.defineLeft}>
                <h5 className={styles.researchTitle}>Proto Personas</h5>
                <p>
                  A proto-persona analysis was performed to help reduce the
                  focus on individual user behaviours but draw similarities that
                  exist to gain opportunities. It also assists in targeting
                  users based on the assumptions of stakeholders and the
                  similarities between individual personas during field
                  research.
                </p>
              </div>

              <div className={styles.defineRight}>
                <img
                  className={styles.personaImg}
                  src="../assets/JohnNjeru.png"
                  alt="John Njeru Persona"
                />
              </div>
            </div>

            <p className={styles.designText}></p>
          </div>
        </section>
      </>
    );
  }
}

export default Sankofa;
