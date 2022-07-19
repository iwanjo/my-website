import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import navStyles from "./css-modules/Navbar.module.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link as Scroll } from "react-scroll";
import ReactSwitch from "react-switch";
import "./App.css";
import styles from "./css-modules/Home.module.css";

export const ThemeContext = createContext(null);

function About() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    // ThemeContext to Change Theme btwn light and dark
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <Helmet>
          <title>Ian Wanjohi | About</title>
        </Helmet>
        {/* Page Navbar */}
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

                <LinkContainer to="/">
                  <Nav.Link className={navStyles.navLink}>
                    <p>Work</p>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about">
                  <Nav.Link className={navStyles.navLink}>
                    <p id="active">About</p>
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

          {/* Main About Page Body */}
          <section className={styles.portfolio} id="main">
            <div className={styles.titleArea}>
              <div className={styles.projectBlock}>
                <div className={styles.leftProject}>
                  <img
                    src="../assets/i2.jpg"
                    className={styles.bannerImg}
                    alt="Ian Wanjohi sitting at a park bench near the Kigali Convention Centre"
                  ></img>
                </div>

                <div className={styles.rightProject}>
                  <h1 className={styles.aboutTitle}>
                    Hello there 👋🏾 I'm Ian Wanjohi
                  </h1>
                  <h5 className={styles.aboutSubtitle}>
                    I'm a Kenyan 🇰🇪 Product Designer
                  </h5>

                  <p>Here are some of my personal values</p>
                  <div className={styles.valuesGroup}>
                    <img
                      src="../assets/asteroid.png"
                      className={styles.valuesImg}
                      alt="Impact"
                    />
                    <p>
                      <b>Impact - </b>I want to work on impactful projects, and
                      create innovative digital products that disrupt
                      industries.
                    </p>
                  </div>
                  <div className={styles.valuesGroup}>
                    <img
                      src="../assets/education.png"
                      className={styles.valuesImg}
                      alt="Curiosity"
                    />
                    <p>
                      <b>Curiosity - </b>I enjoy learning, and accept that
                      there's a lot of room to grow by learning from others and
                      one's experiences.
                    </p>
                  </div>
                  <div className={styles.valuesGroup}>
                    <img
                      src="../assets/adventure-game.png"
                      className={styles.valuesImg}
                      alt="Adventure"
                    />
                    <p>
                      <b>Adventure - </b>I am keen to enjoy new experiences, and
                      challenge myself with high velocity and challenging
                      adventures.
                    </p>
                  </div>
                  <div className={styles.valuesGroup}>
                    <img
                      src="../assets/teamwork.png"
                      className={styles.valuesImg}
                      alt="Collaboration"
                    />
                    <p>
                      <b>Collaboration - </b>I believe one will go fast alone,
                      but one can go far with a team. Learning from and
                      supporting my team is a key value for me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.portfolio} id="main">
            <div>
              <h4>Bio</h4>
              <p className={styles.projectDescription}>
                I'm a computer science graduate from The African Leadership
                University. I'm specializing in <b>product design</b> to create
                interactive, data-driven and human-centred solutions that
                positively impact people and companies. I'm eager to leverage 2+
                Years of Product Design experience, Engineering Best Practices,
                Scrum and a Team-Centric Approach to enhance data-driven
                decisions and the adoption of user-friendly products.
              </p>

              <p className={styles.projectDescription}>
                My mission is to use technology and human centered design to
                create sustaiable digital solutions that positively impact
                people's lives. Thanks to my previous experience in product
                design and software development, I have gained comprehensive
                knowledge of the technical feasibility of designs and using data
                to inform decision making. Whether working on professional or
                freelance projects, what makes me unique is I apply proven
                communication, critical thinking and problem-solving skills.
              </p>

              <h4>What I enjoy doing</h4>
              <div className={styles.ideationGroup}>
                <div className={styles.ideationCard}>
                  <div className={styles.lottieImg}>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player
                      src="https://assets3.lottiefiles.com/packages/lf20_g1YJeb.json"
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <h5>
                    <b>Product Design</b>
                  </h5>
                  <p>
                    Being involved in the end to end product design process from
                    discovery to ideation, prototyping and testing.
                  </p>
                </div>

                <div className={styles.ideationCard}>
                  <div className={styles.lottieImg}>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player
                      src="https://assets3.lottiefiles.com/packages/lf20_vfkibuho.json"
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <h5>
                    <b>Frontend Development</b>
                  </h5>
                  <p>
                    Developing user-friendly and visually pleasing interfaces
                    and writing high quality, testable code.
                  </p>
                </div>

                <div className={styles.ideationCard}>
                  <div className={styles.lottieImg}>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player
                      src="https://assets2.lottiefiles.com/private_files/lf30_pguaf3lh.json"
                      background="transparent"
                      speed="1"
                      // style={{ width: "240px", height: "240px" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <h5>
                    <b>User Research and Testing</b>
                  </h5>
                  <p>
                    Engaging with end users in testing and validating
                    assumptions and iterating through designs.
                  </p>
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

export default About;
