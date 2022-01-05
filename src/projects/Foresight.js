import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/Foresight.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";
import { Card } from "antd";

class Foresight extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <ScrollToTop smooth color="#21897e" />

        <Helmet>
          <title>Foresight | Ian Wanjohi</title>
        </Helmet>
        <ProjectsNavbar />

        <section className={styles.heroSection} id="section1">
          <div className={styles.heroContainer}>
            <div className={styles.leftContainer}>
              <h1 className={styles.projectTitle}>
                Foresight Agricultural Insights
              </h1>
              <p className={styles.projectText}>
                Providing Africa access to low-cost drones to help determine
                subsistence crop quality and estimate yields.
              </p>
              <a
                href="https://foresight-africa.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.websiteBtn}>Visit Website</button>
              </a>
            </div>
            <div className={styles.rightContainer}>
              <img
                src="../assets/foresight-cover-banner.png"
                alt="Foresight Banner"
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
                  <img src="../assets/foresight-man.png" alt="Role Logo" />
                </div>
                <h5>Role</h5>
                <p className={styles.cardText}>UX-UI Designer & Engineer</p>
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
                <p className={styles.cardText}>ReactJS & Figma</p>
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
                <p className={styles.cardText}>Personal Project</p>
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
                <p className={styles.cardText}>June 2021 - Present</p>
              </div>
            </div>

            <h1 className={styles.problemTitle}>The Problem</h1>
            <p className={styles.problemText}>
              The challenges facing farmers in Africa are numerous; low
              application of modern agricultural technology such as drones and
              fertilisers in plantations, limited public and private investment
              in infrastructure, and lack of well-trained agri-experts to
              improve on farming methods. If sustainable solutions are not
              implemented to reduce harvest loss, enable better access to
              markets and reduce degradation in farmlands, poverty and food
              hunger will continue rising rise, leading to a failure in SDG 2.
            </p>
          </div>
          <div className={styles.solutionContainer}>
            <h2 className={styles.solutionTitle}>Solution</h2>
            <p className={styles.solutionText}>
              Using agricultural drone technology in estimating crop yields to
              obtain more precise method forecasts and survey crop health
              accurately. By using drones, agricultural ventures will be able to
              survey their farms and take sharp aerial pictures that contain
              projections of yield amounts, and more.
            </p>
          </div>
        </section>

        <section className={styles.design} id="section3">
          <div className={styles.designContainer}>
            <h1 className={styles.designTitle}>Design Process</h1>
            <p className={styles.designText}>
              In order to tackle this challenge, I embraced the Human Centered
              Design approach
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
              In numerous regions in Africa, drones are steadily being adopted
              in large-scale precision farming operations. Agriculture primarily
              serves as the backbone of the continent’s economic activities. By
              embracing this technology, there will be an increase in the
              efficiency and effectiveness of farming operations thanks to
              in-depth data analytics providing critical insights into crop
              health and solutions to existing bottlenecks in their
              process(Pinguet, 2021). The data obtained from drone surveys help
              farmers plan their harvesting and treatments to achieve the most
              effective yield amounts, which may help increase their
              profitability(Croptracker - Drone Technology In Agriculture,
              2021).
            </p>

            <h2 className={styles.researchTitle}>
              Understanding the different stakeholders in the agricultural
              industry.
            </h2>

            <p className={styles.researchText}>
              To gain a better understanding of our research goal and empathise
              with our users, we conducted 10 interviews with stakeholders in
              the agricultural industry - representing various fields such as
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
                  6 of the 10 however stated that due to the losses reported
                  over the past 2 years, they would have challenges investing
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
                In prototyping, our goal was to rapidly wireframe and create
                high fidelity interfaces for what a drone themed solution would
                look like to address this problem. The answer was Foresight - an
                agricultural insights program that will provide farmers and
                agricultural stakeholders the relevant information they need
                regarding crop health, moisture levels and quantity. For the
                application's beta, we decided on wireframing its homepage,
                register and login screens. Here are the high fidelity shots
                from this process.
              </p>

              <div className={styles.interfaceContainer}>
                <img
                  src="../assets/foresight-banner.png"
                  alt="Foresight Homepage"
                />

                <img src="../assets/login.png" alt="Foresight Login page" />

                <img
                  src="../assets/register.png"
                  alt="Foresight Registration"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="section4" className={styles.implementation}>
          <div className={styles.implementationContainer}>
            <h1 className={styles.implementationTitle}>Implementation</h1>
            <p className={styles.implementationText}>
              For this project, I coded the frontend with ReactJS, GitHub for
              version control and Netlify for hosting. You can check out the
              hosted project below.
            </p>
            <a
              href="https://foresight-africa.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.websiteBtn}>Visit Website</button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <section className={styles.contact} id="section4">
          <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>Let's get in touch</h1>
            <p className={styles.contactText}>
              Keen to collaborate and work on impactful projects💻. Let's
              connect via{" "}
              <a
                href="mailto:iwanjohi11@gmail.com"
                className={styles.emailText}
              >
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
}

export default Foresight;
