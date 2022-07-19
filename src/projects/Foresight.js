/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/Foresight.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";
import { Card } from "antd";
import Footer from "../Footer";

class Foresight extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <ScrollToTop smooth color="#21897e" />

        <Helmet>
          <title>Foresight Case Study | Ian Wanjohi</title>
        </Helmet>
        <ProjectsNavbar />

        <section className={styles.heroSection} id="section1">
          <div className={styles.heroContainer}>
            <div className={styles.leftContainer}>
              <h1 className={styles.projectTitle}>Foresight</h1>
              <p className={styles.projectText}>
                Utilising agricultural drone technology and IoT to provide
                medium-large scale agricultural enterprises access to contextual
                insights and recommendations for their crops.
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
                src="../assets/foresight-ai-banner.png"
                alt="Foresight Banner"
                className={styles.protoImg}
              />
            </div>
          </div>
        </section>

        <section className={styles.challenge}>
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
                <p className={styles.cardText}>
                  Case Study with{" "}
                  <a
                    href="https://www.ziitheewen.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <b>Ziithe Ewen Hiwa</b>
                  </a>
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
                <p className={styles.cardText}>May 2022 - Present</p>
              </div>
            </div>

            <h1 className={styles.problemTitle} id="section2">
              The Challenge
            </h1>
            <p className={styles.problemText}>
              The challenges facing farmers in Africa are numerous; low
              application of modern agricultural technology such as drones and
              fertilisers in plantations, limited public and private investment
              in infrastructure, and lack of well-trained agri-experts to
              improve on farming methods.
              <br />
              <br />
              Agricultural Insights are key to reducing risks and gaining better
              control of farm health, yields and output. It is no new tale that
              Agriculture is one of the largest contributors to Africa’s GDP and
              a bedrock for global economies at large. However, risks and the
              lack of predictability of the many factors affecting crop health
              and yield remain key challenges in small and large-scale farming.
              However, the increase in agricultural technologies and innovations
              is presenting more opportunities for farmers to gain better
              control of their farming experience. This project allowed us to
              explore the opportunities presented by cutting-edge agricultural
              technologies in addressing key issues of risk mitigation,
              prediction and real-time data into factors that affect crop yield.
            </p>
            <div className={styles.precisionDiv}>
              <img
                src="../assets/precision-agriculture.jpg"
                alt="Future of Farming - Incorporating Data and Technology into the agricultural lifecycle"
                className={styles.precisionImg}
              />
              <p>
                Image Source:{" "}
                <a
                  href="https://www.brinknews.com/how-drones-can-help-ignite-a-farming-gig-economy-in-the-developing-world/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Here
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.design} id="section3">
          <div className={styles.designContainer}>
            <h1 className={styles.designTitle}>Design Process</h1>
            <p className={styles.designText}>
              In order to tackle this challenge, we embraced the Human Centered
              Design approach. We chose this approach, to ensure we better
              understand people's needs, motivations and pain points, especially
              since we aren't experts or heavily experienced in the agri-tech
              industry.
              <br />
              <br />
              This allowed us to ensure we would address problems at their root,
              rather than just addressing symptoms, learn about what our
              prospective users want and are willing to pay for, which would
              lead to a pleasant user experience.
            </p>
          </div>

          <div className={styles.defineContainer}>
            <div className={styles.defineLeft}>
              <h2 className={styles.defineTitle}>
                <strong>Empathise and Define</strong>
              </h2>
              <p className={styles.defineText}>
                We conducted research into countries using drones in farm
                mapping and logistics to understand why they have made the shift
                and its benefits. Some notable examples include:
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
              Usage of Drone Technology in Agricultural Operations
            </h2>
            <div className={styles.precisionDiv}>
              <img
                src="../assets/malawi-drone-fao.jpg"
                alt="Drone Imaging being used to help farmers in Kasungu, Malawi to predict crop yields"
                className={styles.benchmarkImg}
              />
              <p className={styles.researchText}>
                Source:{" "}
                <a
                  href="https://reliefweb.int/report/malawi/drone-images-help-farmers-predict-crop-yields-malawi"
                  rel="noreferrer"
                  target="_blank"
                >
                  Here
                </a>
              </p>
            </div>
            <p className={styles.researchText}>
              The image above shows a joint project conducted by{" "}
              <b>
                Malawi's Department of Agriculture, UNICEF, the Food and
                Agriculture Organization and the World Food Programme
              </b>{" "}
              at Kanyenda Irrigation crop field in Kasungu, Malawi. The drone
              operators fly it high above the field, capturing numerous high
              quality images, which are then compared with data collected from
              the ground. Through a process called ground truthing, the
              agricultural specialists compare the ground data to that of the
              drone images.
              <br />
              <br />
              The project's stakeholders have highlighted the importance of this
              technology, allowing them{" "}
              <b>
                to have accurate estimates of crop yield and crop health,
                providing the government with early warning signs, and in early
                planning
              </b>
              .
            </p>
            <p className={styles.researchText}>
              It's important to note that in numerous regions in Africa, drones
              are slowly being adopted in large-scale precision farming
              operations. Agriculture primarily serves as the backbone of the
              continent’s economic activities. By embracing this technology,
              there will be an increase in the efficiency and effectiveness of
              farming operations thanks to in-depth data analytics providing
              critical insights into crop health and solutions to existing
              bottlenecks in their process. The data obtained from drone surveys
              help farmers plan their harvesting and treatments to achieve the
              most effective yield amounts, which may help increase their
              profitability.
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
              <h1 className={styles.prototypingTitle}>Ideation</h1>
              <p className={styles.prototypingText}>
                In Ideation, our goal was to explore ideas (whether good, bad or
                plain crazy) and spark discussions regarding how we can
                implement a practical idea that addresses our users issues at
                the root.
              </p>

              <h2 className={styles.researchTitle}>Ideation Methods Used</h2>

              <div className={styles.ideationGroup}>
                <div className={styles.ideationCard}>
                  <img
                    src="../assets/brainstorm-ideation.png"
                    alt="Brainstorming Icon"
                    className={styles.ideationImg}
                  />
                  <h5>Brainstorming</h5>
                </div>

                <div className={styles.ideationCard}>
                  <img
                    src="../assets/creativity.png"
                    alt="Braindump Icon"
                    className={styles.ideationImg}
                  />
                  <h5>Braindump</h5>
                </div>

                <div className={styles.ideationCard}>
                  <img
                    src="../assets/mind-mapping.png"
                    alt="Mind Mapping Icon"
                    className={styles.ideationImg}
                  />
                  <h5>Mind Mapping</h5>
                </div>
              </div>

              <h2 className={styles.researchTitle}>
                Ideation: How Might We Questions
              </h2>
              <img
                src="../assets/hmw-foresight.png"
                alt="How Might We - Foresight"
                className={styles.hmwForesight}
              />
            </div>
          </div>
        </section>

        <div className={styles.solutionContainer}>
          <img
            src="../assets/website.png"
            alt="Desktop and Website Icon"
            className={styles.websiteIcon}
          />
          <h2 className={styles.solutionTitle}>Solution</h2>
          <p className={styles.solutionText}>
            The solution would be presented in the form of a{" "}
            <b>Web Application </b>
            that allows farmers and agri-specialists to view the various farms
            being monitored by drone technology and gain tangible insights from
            the data dashboard presenting near-to-real-time data from the farms.
          </p>
        </div>

        <section className={styles.design}>
          <div className={styles.designContainer}>
            <div className={styles.prototypingSection}>
              <h1 className={styles.researchTitle}>Unique Features</h1>
              <p className={styles.defineText}>
                Before building the product, we went ahead to look into any
                existing solutions - their offerings, strengths and weaknesses
                and how our product differed. Below are some of the features
                this solution has, that gave it its competitive advantage:
              </p>

              <div className={styles.ideationGroup}>
                <div className={styles.ideationCard}>
                  <img
                    src="../assets/feature1.png"
                    alt="User Friendly Data Dashboards"
                    className={styles.featureImg}
                  />
                </div>

                <div className={styles.ideationCard}>
                  <img
                    src="../assets/feature2.png"
                    alt="Drone Technology and IoT"
                    className={styles.featureImg}
                  />
                </div>

                <div className={styles.ideationCard}>
                  <img
                    src="../assets/feature3.png"
                    alt="CBO"
                    className={styles.featureImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.design}>
          <div className={styles.designContainer}>
            <div className={styles.prototypingSection}>
              <h1 className={styles.prototypingTitle}>Prototyping</h1>
              <p className={styles.defineText}>
                In the prototyping phase, we adopted an iterative-first design
                policy, ensuring that we involved our stakeholders in the
                design, gathering their feedback and applying it to improved
                iterations. In the Prototyping stage, we created pen-paper
                sketches, low fidelity wireframes, a micro design system (UI
                Kit) and high-fidelity interfaces.
              </p>

              <h4 className={styles.researchTitle}>Micro Design System</h4>

              <div className={styles.ideationGroup}>
                <div className={styles.ideationCard}>
                  <img
                    src="../assets/foresight-colors.png"
                    alt="Foresight Color Scheme"
                    className={styles.designSystemImg}
                  />
                </div>

                <div className={styles.ideationCard}>
                  <img
                    src="../assets/foresight-typeface.png"
                    alt="Foresight Typeface and Font"
                    className={styles.designSystemImg}
                  />
                </div>

                <div className={styles.ideationCard}>
                  <img
                    src="../assets/foresight-buttons.png"
                    alt="Foresight Button Components"
                    className={styles.designSystemImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.defineContainer}>
          <div className={styles.defineLeft}>
            <h2 className={styles.defineTitle}>
              <strong>Foresight Landing Page Design</strong>
            </h2>
            <p className={styles.defineText}>
              The design of the Landing Page followed a simple 5-step process;
              defining who the target users are, sketching and wireframing,
              iterative low to high fidelity prototype designs, testing and user
              feedback and finally designing the final landing page. We went
              through an iterative design process where we tested multiple
              iterations with our target users to gain their feedback.
              <br />
              <br />
              From the first Iterations, the main user feedback we received was:
            </p>
            <ol>
              <li>
                To add an agricultural touch to the Landing Page as most got the
                perception that it was simply a drone company page.
              </li>
              <br />
              <li>
                Add trusted brands to the website to show impact and involvement
                with other Agricultural Firms.
              </li>
              <br />

              <li>Show the impact in numbers!</li>
            </ol>
          </div>

          <div className={styles.defineRight}>
            <img
              className={styles.personaImg}
              src="../assets/foresight-design-iterations.png"
              alt="Foresight Design Iterations From User Testing"
            />
          </div>
        </div>

        <div className={styles.centerDiv}>
          <h4>Final Landing Page Design</h4>
          <img
            src="../assets/foresight-final-landing-page.png"
            alt="Final Foresight Landing Page Design"
            className={styles.designImg}
          />
        </div>

        <section className={styles.design}>
          <div className={styles.designContainer}>
            <div className={styles.prototypingSection}>
              <div className={styles.gifContainer}>
                <h1>Foresight Prototype</h1>
                <p>
                  You can interact with Foresight's Figma Prototype below, and
                  see all of the different high-fidelity wireframes that were
                  created
                </p>

                <iframe
                  className={styles.protoFrame}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEZgA0lQ9B0GcePrn5J1tq2%2FForesight-Case-Study%3Fnode-id%3D704%253A5480%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D704%253A5480"
                ></iframe>
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
        <Footer />
      </>
    );
  }
}

export default Foresight;
