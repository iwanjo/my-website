import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";
import styles from "./css-modules/Home.module.css";
import "./App.css";
import ReactSwitch from "react-switch";
import { LinkContainer } from "react-router-bootstrap";
import { Link as Scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import navStyles from "./css-modules/Navbar.module.css";

export const ThemeContext = createContext(null);

function Home() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <Helmet>
          <title>Ian Wanjohi | Home</title>
        </Helmet>
        <ScrollToTop smooth color="#00a5f7" />
        <div className="App" id={theme}>
          <Navbar
            id={theme}
            collapseOnSelect
            expand="lg"
            sticky="top"
            className={navStyles.topNav}
          >
            <LinkContainer to="/">
              <Navbar href="#home" className={navStyles.brand}>
                <img
                  src="/ian-logo.png"
                  alt="Ian's Avatar"
                  className={navStyles.avatar}
                ></img>
              </Navbar>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav className={navStyles.navLinksArea}>
                <ReactSwitch
                  className="toggleBtn"
                  onChange={toggleTheme}
                  checked={theme === "light"}
                  checkedIcon="☀️"
                  height={24}
                  uncheckedIcon="🌙"
                ></ReactSwitch>
                <Scroll
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Nav.Link href="#section1" className={navStyles.navLink}>
                    <p id="active">Work</p>
                  </Nav.Link>
                </Scroll>

                <LinkContainer to="/about">
                  <Nav.Link className={navStyles.navLink}>
                    <p>About</p>
                  </Nav.Link>
                </LinkContainer>

                <Scroll
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Nav.Link className={navStyles.navLink}>
                    <p>Contact</p>
                  </Nav.Link>
                </Scroll>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <section className={styles.heroSection} id="main">
            <div className={styles.heroContainer}>
              <img
                src="/assets/i1.jpg"
                alt="Portrait Shot of Ian Wanjohi"
                className={styles.mainImg}
              ></img>

              <h1 className={styles.helloTitle}>Hello 👋🏾 I'm Ian Wanjohi</h1>
              <h3 className={styles.jobTitle}>
                User Experience and Digital Product Designer
              </h3>
              <p className={styles.missionText}>
                Specializing in using human-centered design and technology to
                create data-driven solutions that positively impact people's
                lives.
              </p>

              <div className={styles.buttonGroup}>
                <a
                  href="https://drive.google.com/file/d/1hg3sdefEdi8wVif4KHKfVjzlAMf4GuX3/view?usp=sharing"
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

          <section className={styles.portfolio} id="main">
            <div className={styles.titleArea}>
              <h1 className={styles.latestTitle} id="section1">
                Latest Projects
              </h1>
              <h3 className={styles.caseTitle}>
                Product Case Studies and Development
              </h3>

              <div className={styles.projectBlock}>
                <div className={styles.leftProject}>
                  <img
                    src="../assets/foresight-project-banner.png"
                    className={styles.bannerImg}
                    alt="Foresight Banner"
                  ></img>
                </div>

                <div className={styles.rightProject}>
                  <h1 className={styles.projectTitle}>Foresight</h1>
                  <p className={styles.projectDescription}>
                    Foresight uses agricultural drone and Internet of Things
                    (IoT) technology to monitor and estimate crop yield and
                    quality. This data allows us to closely monitor crop health
                    factors such as soil moisture, temperature, and provide
                    real-time predictions.
                  </p>
                  <LinkContainer to="/foresight">
                    <button className={styles.resumeBtn}>View Project</button>
                  </LinkContainer>
                  <a
                    href="https://foresight-africa.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className={styles.calendlyBtn}>Website Link</button>
                  </a>
                </div>
              </div>

              <div className={styles.projectBlock}>
                <div className={styles.leftProject}>
                  <img
                    src="../assets/dk-banner.png"
                    className={styles.bannerImg}
                    alt="Discover Kenya Banner"
                  ></img>
                </div>

                <div className={styles.rightProject}>
                  <h1 className={styles.projectTitle}>Discover Kenya</h1>
                  <p className={styles.projectDescription}>
                    Discover Kenya is a mobile application that allows
                    tourism/safari companies, creative agencies and
                    photographers to share visual content of Kenya and create a
                    community of artistic contributors.
                  </p>

                  <LinkContainer to="/discover-kenya">
                    <button className={styles.resumeBtn}>View Project</button>
                  </LinkContainer>
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
                    src="../assets/sankofa-banner.png"
                    className={styles.bannerImg}
                    alt="Sankofa Banner"
                  ></img>
                </div>

                <div className={styles.rightProject}>
                  <h1 className={styles.projectTitle}>Sankofa</h1>
                  <p className={styles.projectDescription}>
                    Sankofa is a mobile application that uses geolocation to
                    tell consumers the nearest drop off point (charity homes,
                    recycling company or thrift company) for their unwanted
                    clothes.{" "}
                  </p>
                  <LinkContainer to="/sankofa">
                    <button className={styles.resumeBtn}>View Project</button>
                  </LinkContainer>
                </div>
              </div>

              <div className={styles.projectBlock}>
                <div className={styles.leftProject}>
                  <img
                    src="../assets/seedfund-project-banner.png"
                    className={styles.bannerImg}
                    alt="Seedfund Banner"
                  ></img>
                </div>

                <div className={styles.rightProject}>
                  <h1 className={styles.projectTitle}>Seedfund</h1>
                  <p className={styles.projectDescription}>
                    Seedfund is an equity crowdfunding mobile platform for
                    Kenyan SMEs and Investors. The application intends to enable
                    SMEs to seek funding at scale from a large network of
                    investors and create a digitally inclusive financial
                    community
                  </p>

                  <LinkContainer to="#">
                    <button className={styles.resumeBtn}>Coming Soon</button>
                  </LinkContainer>
                  <a
                    href="https://github.com/iwanjo/seedfund_capstone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className={styles.calendlyBtn}>GitHub Repo</button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.contact} id="main">
            <div className={styles.contactContainer} id="section4">
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
                  Copyright &copy; 2022 Designed and developed with care by Ian
                  Wanjohi.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    </ThemeContext.Provider>
  );
}

export default Home;
