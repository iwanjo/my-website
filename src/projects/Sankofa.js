import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/Sankofa.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";
import { Card } from "antd";


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
            The second-hand clothing industry provides jobs for about 35,000
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
          secondhand clothing chain and understand its impact on the environment
          in Ghana.
        </p>
      </div>

      <section className={styles.design} id="section3">
        <div className={styles.designContainer}>
          <h1 className={styles.designTitle}>Research Synthesis</h1>
          <p className={styles.designText}>
            
          </p>
        </div>

        <div className={styles.defineContainer}>
          <div className={styles.defineLeft}>
            <h2 className={styles.defineTitle}>
              <strong>Define & Ideate</strong>
            </h2>
            <p className={styles.defineText}>
              I conducted research into countries using drones in farm mapping
              and logistics to understand why they have made the shift and its
              benefits. Some notable examples include:
            </p>
            <ul>
              <li>Rwanda</li>
              <li>South Africa</li>
              <li>Ghana</li>
              <li>Malawi</li>
            </ul>

            <p className={styles.defineText}>
              Using drones in agriculture can help knuckle down on farm areas
              severely affected by pests and diseases and give farmers the
              information they need to make informed decisions. It's also more
              cost and time-effective as performing a drone crop survey will
              help immediately identify affected areas, ensuring maximum
              priority is given to such areas.
            </p>
            <p className={styles.defineText}>
              <strong>Research Goal:</strong> To understand the perceptions of
              the different stakeholders in the agriculture market and how we
              could innovate for a solution that addresses their issues.
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

        <div className={styles.researchContainer}>
          <h2 className={styles.researchTitle}>
            Importance of Drone Technology
          </h2>
          <p className={styles.researchText}>
            In numerous regions in Africa, drones are steadily being adopted in
            large-scale precision farming operations. Agriculture primarily
            serves as the backbone of the continent’s economic activities. By
            embracing this technology, there will be an increase in the
            efficiency and effectiveness of farming operations thanks to
            in-depth data analytics providing critical insights into crop health
            and solutions to existing bottlenecks in their process(Pinguet,
            2021). The data obtained from drone surveys help farmers plan their
            harvesting and treatments to achieve the most effective yield
            amounts, which may help increase their profitability(Croptracker -
            Drone Technology In Agriculture, 2021).
          </p>

          <h2 className={styles.researchTitle}>
            Understanding the different stakeholders in the agricultural
            industry.
          </h2>

          <p className={styles.researchText}>
            To gain a better understanding of our research goal and empathise
            with our users, we conducted 10 interviews with stakeholders in the
            agricultural industry - representing various fields such as
            agricultural specialists, equipment technicians, environmental
            engineers and general farm workers. Some of the findings we found
            were
          </p>
          <div className={styles.researchCardGroup}>
            <Card
              style={{
                width: 300,
                height: 200,
                background: "#21897e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                4 of the 10 stated that they would back and invest in using
                technological solutions to reduce harvest loss.
              </p>
            </Card>

            <Card
              style={{
                width: 300,
                height: 200,
                background: "#21897e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                6 of the 10 however stated that due to the losses reported over
                the past 2 years, they would have challenges investing
              </p>
            </Card>

            <Card
              style={{
                width: 300,
                height: 200,
                background: "#21897e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                Advancements are necessary in the field of agriculture and
                technology and friendly regulations should be applied.
              </p>
            </Card>
          </div>

          <div className={styles.prototypingSection}>
            <h1 className={styles.prototypingTitle}>Prototyping </h1>
            <p className={styles.prototypingText}>
              In prototyping, our goal was to rapidly wireframe and create high
              fidelity interfaces for what a drone themed solution would look
              like to address this problem. The answer was Foresight - an
              agricultural insights program that will provide farmers and
              agricultural stakeholders the relevant information they need
              regarding crop health, moisture levels and quantity. For the
              application's beta, we decided on wireframing its homepage,
              register and login screens. Here are the high fidelity shots from
              this process.
            </p>

            <div className={styles.interfaceContainer}>
              <img
                src="../assets/foresight-banner.png"
                alt="Foresight Homepage"
              />

              <img src="../assets/login.png" alt="Foresight Login page" />

              <img src="../assets/register.png" alt="Foresight Registration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sankofa;
