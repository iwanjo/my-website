/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/DiscoverKenya.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "antd";
import Footer from "../Footer";

class DiscoverKenya extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <ScrollToTop smooth color="#E16E7E" />

        <Helmet>
          <title>Discover Kenya | Ian Wanjohi</title>
        </Helmet>
        <ProjectsNavbar />

        <section className={styles.heroSection} id="section1">
          <div className={styles.heroContainer}>
            <div className={styles.leftContainer}>
              <img
                src="../assets/dk-logo.svg"
                alt="Discover Kenya Logo"
                className={styles.logo}
              />
              <h1 className={styles.projectTitle}>Discover Kenya</h1>
              <p className={styles.projectText}>
                Connecting users to beautiful photos of Kenya, while creating a
                community of visual contributors. A hub for individuals and
                businesses to share Kenya's magic.
              </p>
              <button className={styles.tags}>In Development</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className={styles.tags}>Mobile Application</button>
            </div>

            <div className={styles.rightContainer}>
              <img
                src="../assets/prototype.png"
                loading="eager"
                alt="Discover Kenya Homepage"
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
                <p className={styles.cardText}>UX-UI Designer & Engineer</p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card2}>
                <div className={styles.centerImg}>
                  <img src="../assets/tools.png" alt="Tools Logo" />
                </div>
                <h5>Tools Used</h5>
                <p className={styles.cardText}>Figma & Flutter</p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card3}>
                <div className={styles.centerImg}>
                  <img src="../assets/project.png" alt="Project Logo" />
                </div>
                <h5>Project Type</h5>
                <p className={styles.cardText}>Personal Project</p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.card4}>
                <div className={styles.centerImg}>
                  <img src="../assets/calendar.png" alt="Calendar Logo" />
                </div>
                <h5>Duration</h5>
                <p className={styles.cardText}>August 2021 - September 2021</p>
              </div>
            </div>
            <h1 className={styles.challengeTitle}>The Challenge</h1>
            <p className={styles.challengeText}>
              As a result of the COVID-19 virus and the various safety measures
              implemented, numerous areas of economic activity were dealt a
              severe blow. At the height of the pandemic in the spring and
              summer of 2020, many countries imposed bans on international
              travel, lockdowns, physical distancing and curfews, which had
              harsh economic consequences. One area that stood out to me is the
              tourism industry in Kenya. The country is one of the leading
              tourist destinations in Africa, offering a wide range of
              attractions such as pristine beaches, safaris, deserts and more.
              <br />
              <br />
              Due to the pandemic prevention measures and their far-reaching
              consequences, the industry suffered massive job losses, closure of
              local travel and tourism agencies, and revenue losses. Tourism
              arrivals in Kenya dropped by more than 70% in Kenya during the
              first few months of 2020, and the country lost more than $1
              Billion in revenue from annual tourism earnings.
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

        <section className={styles.designProcess} id="section3">
          <div className={styles.designContainer}>
            <h1 className={styles.designTitle}>Design Process</h1>
            <p className={styles.designText}>
              In order to tackle this challenge, I embraced the Human Centered
              Design approach
            </p>
            <img
              src="../assets/process.png"
              className={styles.processImg}
              alt="Human Centered Design Process"
            />
          </div>
        </section>

        <div className={styles.defineContainer}>
          <div className={styles.defineLeft}>
            <h2 className={styles.defineTitle}>
              <strong>1. Define</strong>
            </h2>
            <p className={styles.defineText}>
              To better understand my assumptions, validate the research goal,
              and empathize with the people in this field, I conducted 12
              semi-structured interviews and sent out an online survey to the
              following user groups.
            </p>
            <ul>
              <li>Safari/tour operators</li>
              <li>Small business owners near tourist spots</li>
              <li>Tourists</li>
              <li>Tour guides</li>
              <li>Photographers</li>
            </ul>

            <p className={styles.defineText}>
              We identified the goals and pain points for our two main user
              groups reflected in the user personas to the right.
            </p>
            <p className={styles.defineText}>
              <strong>Research Goal:</strong> To understand the perceptions of
              the different stakeholders in the tourism market and how we could
              innovate for a solution that addresses their issues.
            </p>
          </div>

          <div className={styles.defineRight}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className={styles.personaImg}
                  src="../assets/persona.png"
                  alt="Jamil Gitonga Persona"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className={styles.personaImg}
                  src="../assets/gina.png"
                  alt="Gina Kariuki Persona"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className={styles.researchFindings}>
          <h1 className={styles.researchFindingsTitle}>Research Debrief</h1>
          <div className={styles.researchCardGroup}>
            <Card
              style={{
                width: 300,
                height: 200,
                background: "#e16e7e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                “Lack of a united front and community aspect in dealing with
                COVID-19 as an industry at the beginning. Only when we come
                together can we overcome the challenges.”
              </p>
            </Card>

            <Card
              style={{
                width: 300,
                height: 200,
                background: "#e16e7e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                “Safety measures were put in place to protect travellers and
                workers, however there were plenty of occasions we on the
                frontline felt compromised. ”
              </p>
            </Card>

            <Card
              style={{
                width: 300,
                height: 200,
                background: "#e16e7e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                “Keen to explore what Kenya has to offer, however I don’t know
                how to and where to go to do that.”
              </p>
            </Card>
          </div>
          <div className={styles.researchCardGroup}>
            <Card
              style={{
                width: 300,
                height: 200,
                background: "#e16e7e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                “Hard to gain leads and convert clients when you’re new in the
                tourism / creative field and lacking connections.”
              </p>
            </Card>

            <Card
              style={{
                width: 300,
                height: 200,
                background: "#e16e7e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                “Lack of a community approach to this industry, hard to connect
                with others in the field.”
              </p>
            </Card>

            <Card
              style={{
                width: 300,
                height: 200,
                background: "#e16e7e",
                color: "#fff",
                textAlign: "center",
              }}
              className={styles.researchCard}
            >
              <p>
                “Magical Kenya means showcasing the beauty of Kenya with pride
                and confidence. There are numerous areas people have yet to see,
                hidden gems I want to explore and showcase.”
              </p>
            </Card>
          </div>
        </div>

        {/* ideate section */}
        <div className={styles.ideateContainer}>
          <div className={styles.ideateLeft}>
            <h2 className={styles.ideateTitle}>
              <strong>2. Ideation</strong>
            </h2>
            <img
              className={styles.brainstormingImg}
              src="../assets/brainstorming.png"
              alt="Creative Brainstorming Session"
            />

            <img
              src="../assets/solutions.png"
              className={styles.brainstormingImg}
              alt="Possible Solutions"
            />
          </div>

          <div className={styles.ideateRight}>
            <p className={styles.ideateText}>
              We held a 2-hour creative workshop to ideate and brainstorm
              potential solutions to our challenge. The members of the workshop
              were from different cultural and economic backgrounds in the
              tourism industry, representing the multi-faceted areas of the
              sector, i.e, places such as the coastal regions of Mombasa,
              Kilifi, Kwale, the Western region of Kisumu, Northern Kenya and
              Central Kenya.
            </p>

            <p className={styles.ideateText}>
              We used the{" "}
              <a
                href="https://www.designkit.org/methods/3"
                target="_blank"
                rel="noreferrer"
              >
                <strong>How Might We</strong>
              </a>{" "}
              framework by IDEO to brainstorm four feasible opportunity areas:
              <ol>
                <li>
                  How might we provide a safe avenue for local and international
                  tourists to learn more and see Magical Kenya?
                </li>
                <li>
                  How might we open up the tourism sector to include different
                  creatives, e.g photographers, artists, musicians and more?
                </li>
                <li>
                  How might we raise awareness about tourism spots that are
                  largely overlooked in Kenya?
                </li>
                <li>
                  How might we utilise technology to overcome the dwindling
                  tourism numbers and enable our businesses to continue
                  operating?
                </li>
              </ol>
            </p>
          </div>
        </div>

        <div className={styles.solutionContainer}>
          <div className={styles.solutionLeft}>
            <h1 className={styles.solutionTitle}>
              <strong>Most Popular Solution</strong>
            </h1>
            <p className={styles.solutionText}>
              An application that allows tourism/safari companies, creative
              agencies and photographers to share visual content of Kenya and
              create a community of artistic contributors.
            </p>
          </div>

          <div className={styles.solutionRight}>
            <img
              src="../assets/travellers.png"
              className={styles.solutionImg}
              alt="Travellers SVG"
            />
          </div>
        </div>

        <div className={styles.functionalSpecs}>
          <h3>App Functional Specifications</h3>
          <p>
            After settling on the solution above, we had discussions with the
            relevant stakeholders to craft out the apps functional
            specifications and features. We also defined the applications
            information architecure using Figjam on this{" "}
            <a
              href="https://www.figma.com/file/fZn8KtBsy7UacGhME344RO/Discover-Kenya-Information-Architecture?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
            >
              link
            </a>
            .
          </p>

          <div className={styles.specDiv}>
            <img
              src="../assets/LoginSpec.png"
              className={styles.specImg}
              alt="Functional Specification"
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="../assets/BusinessAccount.png"
              className={styles.specImg}
              alt="Functional Specification"
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="../assets/SearchPhotos.png"
              className={styles.specImg}
              alt="Functional Specification"
            />{" "}
          </div>

          <div className={styles.specDiv}>
            <img
              src="../assets/UploadPhotos.png"
              className={styles.specImg}
              alt="Functional Specification"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="../assets/DownloadPhotos.png"
              className={styles.specImg}
              alt="Functional Specification"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="../assets/Profile.png"
              className={styles.specImg}
              alt="Functional Specification"
            />
          </div>
        </div>

        <section className={styles.prototyping}>
          <div className={styles.prototypingContainer}>
            <h1 className={styles.prototypingTitle}>3. Prototyping</h1>

            <p className={styles.prototypingText}>
              For this section, I created wireframes and high-fidelity screens
              with Figma Here are a couple of wireframe examples for Discover
              Kenya's onboarding process. To view the wireframes and
              high-fidelity screens, please click on the button below.
            </p>

            <a
              href="https://www.figma.com/file/XeWTTHvzGUp3STWwnCWb8j/Discover-Kenya-Case-Study?node-id=650%3A922"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.resumeBtn}>View Figma</button>
            </a>
            <div>
              <img
                src="../assets/wireframes/onboarding1.png"
                className={styles.onboardingImg}
                alt="Onboarding Wireframe"
              />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src="../assets/wireframes/onboarding2.png"
                className={styles.onboardingImg}
                id={styles.onboarding2}
                alt="Onboarding Wireframe"
              />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src="../assets/wireframes/onboarding3.png"
                className={styles.onboardingImg}
                id={styles.onboarding3}
                alt="Onboarding Wireframe"
              />
            </div>

            <h3 className={styles.interfaceTitle}>High Fidelity Interfaces</h3>
            <p className={styles.interfaceText}>
              After wireframing, I went on to create the high fidelity screens.
              I reviewed the information architecture and created the screens
              based on the various interactions the user will come into contact
              with. Here are some of Discover Kenya's high-fidelity shots.
            </p>
          </div>
          <div className={styles.interfaceImg}></div>
          <img
            src="../assets/interface.png"
            alt="High Fidelity Shots"
            className={styles.interfaceImg}
          />

          <div className={styles.gifContainer}>
            <h1>Discover Kenya Prototype - GIF and Figma Prototype</h1>
            <p>
              Below is an animated GIF of Discover Kenya's prototype and some of
              the various flows the user goes through when they use our app. You can also interact with the clickable Figma Prototype below
            </p>
            <img
              src="../assets/interface.gif"
              alt="Discover Kenya Clickable Prototype"
              className={styles.interfaceGif}
            />
            <iframe
              className={styles.protoFrame}
              width="1100"
              height="750"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXeWTTHvzGUp3STWwnCWb8j%2FDiscover-Kenya-Case-Study%3Fnode-id%3D803%253A1856%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D798%253A2435" allowFullScreen
              allowfullscreen
            ></iframe>
          </div>

        </section>

        <section className={styles.implementation} id="section4">
          <div className={styles.implementationContainer}>
            <h1 className={styles.implementationTitle}>4. Implementation</h1>
            <p>
              Discover Kenya's implementation in Flutter is coming soon. Check
              out the GitHub repo below for updates.
            </p>
            <a
              href="https://github.com/iwanjo/discover-kenya-v2"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.resumeBtn}>GitHub Repository</button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </>
    );
  }
}

export default DiscoverKenya;
