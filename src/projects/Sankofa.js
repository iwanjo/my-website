import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/Sankofa.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";
import { Card } from "antd";

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
              <button className={styles.tags}>Lab Product</button>
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
                  <img src="../assets/figma.png" alt="Figma Logo" />
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
                  <img src="../assets/google-docs.png" alt="Google Docs" />
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
                <br />

                <p>
                  In the research phase of this project we utilised qualitative
                  research techniques such as:{" "}
                </p>
                <ul>
                  <li>Semi-Structured Interviews</li>
                  <li>Shadowing</li>
                  <li>Observation</li>
                </ul>
                <br />

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
                  different categories of participants. Three main stakeholders
                  were identified within 4 different locations, for a total of
                  11 interviews. We used an ecosystem (second image) to help
                  streamline information gathered to highlight vital and
                  essential aspects relevant to the project.{" "}
                </p>

                <div className={styles.methodologyDiv}>
                  <img
                    src="assets/sankofa-research.png"
                    loading="eager"
                    className={styles.methodologyImg}
                    alt="Interview Structure"
                  />

                  <img
                    src="assets/ecosystem1.png"
                    loading="eager"
                    className={styles.ecosystemImg}
                    alt="Ecosystem"
                  />
                </div>

                <div className={styles.journeyMaps}>
                  <strong>Journey Maps</strong>

                  <p>
                    <br></br>
                    The flow of clothes through the Ghanian markets from import
                    to purchase by end-consumers involves numerous stakeholders
                    and intermediaries. To fully understand the stakeholdr
                    behaviour, we created a journey map to map out the clothes
                    journey from import to landfill sites.
                  </p>

                  <div className={styles.methodologyDiv}>
                    <img
                      src="assets/journey-map-sankofa.png"
                      loading="eager"
                      className={styles.mapImg}
                      alt="Ecosystem"
                    />
                  </div>

                  {/* Key Insights Learned During the Research */}
                  <h5 className={styles.researchTitle}>Key Insights Learned</h5>
                  <div className={styles.researchCardGroup}>
                    <Card
                      style={{
                        width: 300,
                        height: 200,
                        background: "#41a695",
                        color: "#fff",
                        textAlign: "left",
                      }}
                      className={styles.researchCard}
                    >
                      <p>
                        “Young & educated consumers are aware & concerned about
                        the ecological impact of clothing, but mostly don't know
                        how to contribute to the change.”
                      </p>
                    </Card>

                    <Card
                      style={{
                        width: 300,
                        height: 200,
                        background: "#41a695",
                        color: "#fff",
                        textAlign: "left",
                      }}
                      className={styles.researchCard}
                    >
                      <p>
                        “Market traders are apathetic to the environmental
                        impact of clothes. ”
                      </p>
                    </Card>

                    <Card
                      style={{
                        width: 300,
                        height: 200,
                        background: "#41a695",
                        color: "#fff",
                        textAlign: "left",
                      }}
                      className={styles.researchCard}
                    >
                      <p>
                        “Consumers want inclusive solutions that are accessible
                        to all regardless of financial or social status.”
                      </p>
                    </Card>
                  </div>
                  <div className={styles.researchCardGroup}>
                    <Card
                      style={{
                        width: 300,
                        height: 200,
                        background: "#41a695",
                        color: "#fff",
                        textAlign: "left",
                      }}
                      className={styles.researchCard}
                    >
                      <p>
                        “Young consumers do not want solutions that require
                        excessive spending of time and money.”
                      </p>
                    </Card>

                    <Card
                      style={{
                        width: 300,
                        height: 200,
                        background: "#41a695",
                        color: "#fff",
                        textAlign: "left",
                      }}
                      className={styles.researchCard}
                    >
                      <p>
                        “Young consumers are interested in upcycling but lack
                        skills and resources.”
                      </p>
                    </Card>

                    <Card
                      style={{
                        width: 300,
                        height: 200,
                        background: "#41a695",
                        color: "#fff",
                        textAlign: "left",
                      }}
                      className={styles.researchCard}
                    >
                      <p>
                        “Consumers are not concerned about wearing second hand
                        because they do not personally know the 1st owner.”
                      </p>
                    </Card>
                  </div>
                </div>

                <h5 className={styles.researchTitle}>Creative Workshop</h5>
                <p>
                  A creative workshop was held to share creative ideas and
                  brainstorm possible solutions to implement based on the
                  analysis and information synthesis. Three opportunity areas
                  were identified:
                </p>
                <div className={styles.cardGroup}>
                  <div className={styles.workshopCards}>
                    <div className={styles.card1}>
                      <div className={styles.centerImg}>
                        <img
                          src="../assets/workshop1.png"
                          alt="Dispose Safely"
                        />
                      </div>
                      <h5>How to properly dispose of textile waste safely?</h5>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.card2}>
                      <div className={styles.centerImg}>
                        <img
                          src="../assets/workshop2.png"
                          alt="Consumers and Technology"
                        />
                      </div>
                      <h5>
                        {" "}
                        How can consumers play a role in reducing clothing
                        waste?
                      </h5>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.card3}>
                      <div className={styles.centerImg}>
                        <img
                          src="../assets/workshop3.png"
                          alt="Raise Awareness"
                        />
                      </div>
                      <h5>
                        How to raise awareness in thrift producing countries?
                      </h5>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular Solution */}
          <div className={styles.heroContainer}>
            <div className={styles.leftPopularContainer}>
              <h2 className={styles.popularTitle}>Most Popular Solution</h2>
              <p className={styles.projectText}>
                Sankofa, a mobile application that uses geolocation to tell
                consumers the nearest drop off point (charity homes, recycling
                companies and thrift stores) for their unwanted clothes. There
                are two interfaces for the application, the consumer side and
                the merchant side.
              </p>
            </div>

            <div className={styles.rightContainer}>
              <img
                src="../assets/solution_sankofa.png"
                loading="eager"
                alt="Most Popular Solution - Sankofa"
                className={styles.protoImg}
              />
            </div>
          </div>

          <div className={styles.designContainer}>
            <h1 className={styles.designTitle}>App Functional Requirements</h1>
            <ul>
              <li>
                The app should use consumer location, upon request, to give
                nearest drop off points around him/her ie.charity homes, other
                thrift shops, recycling companies/collectors
              </li>
              <br />
              <li>
                The app should provide information about the types of clothes
                viable for drop off at each location and the incentive.
              </li>
              <br />
              <li>
                The app should provide information detailed information on each
                suggested drop off point
              </li>
              <br />
              <li>
                The app should provide a method for drop off or pick up of
                clothes by a delivery company
              </li>
              <br />
              <li>
                The app should provide companies to sign up & login with ease.
              </li>
              <br />
              <li>
                The app should provide companies with an in-app wallet that
                would be used for transactions with consumers.
              </li>
              <br />
              <li>
                The app should provide companies with prompts to fill out
                profile details.
              </li>
            </ul>

            <br />
            <br />

            <h5 className={styles.designTitle}>Sankofa Wireframes</h5>
            <p>
              After crafting Sankofa's functional specifications, we moved onto
              the wireframing stage of the design process. Here are a couple of
              wireframe shots
            </p>
          </div>

          <div className={styles.wireframeImg}>
            <img
              src="../assets/sankofa-wireframes.png"
              alt="Sankofa Wireframes - Onboarding, Home, Map"
              loading="eager"
              className={styles.wireframeImg}

            />
          </div>

          <div className={styles.designContainer}>
            <p>The wireframes above showcase stage 2 of the onboarding screen, the home screen where the user can filter between recycling companies, thrift shops and charity homes, and a map view showing their location.</p>
            <br />
            <h5 className={styles.designTitle}>High Fidelity Screens</h5>

          </div>
        </section>
      </>
    );
  }
}

export default Sankofa;
