import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import ScrollToTop from "react-scroll-to-top";
import { Link }	from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import NavbarArea from './Navbar';
import styles from './css-modules/Home.module.css';
import { Helmet } from 'react-helmet';

function Home() {
    

    return(
        <>
        <Helmet>
            <title>Ian Wanjohi | Home</title>
        </Helmet>
        
        <ScrollToTop smooth color="#BADAE8"/>
        <NavbarArea />

            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <img src="/assets/i1.jpg" alt="Portrait Shot of Ian Wanjohi" className={styles.mainImg}></img>
                    <h1 className={styles.helloTitle}>Hello! <span className={styles.fancyTitle}>I'm</span> Ian Wanjohi</h1>
                    <h3 className={styles.jobTitle}>Software Developer & UX-UI Designer from Nairobi, Kenya</h3>
                    <p className={styles.missionText}>Software developer specializing in integrating UX & UI Design to create sustainable solutions that positively impact people’s lives.</p>
                    <button className={styles.resumeBtn}>Download CV</button>

                </div>

            </section>
            {/* <Container>

                        <p className={styles.missionText}>Software developer specializing in integrating UX & UI Design to create sustainable solutions that positively impact people’s lives.</p>
                        <button className={styles.resumeBtn}>Download Resume</button>

                        </div>
                    </Col>

                    <Fade top>
                    <Col sm={true}>
                        <div className={styles.heroSection2}>
                        <img src="/assets/i1.jpg" alt="Portrait Shot of Ian Wanjohi" loading="eager" className={styles.mainImg}></img>
                        </div>
                        
                    </Col>
                    </Fade>
                </Row>
                </section>

            </Container> */}

            <hr className={styles.horizLine}></hr>

            <section className={styles.portfolio}>

                <div className={styles.titleArea}>

                    <h1 className={styles.latestTitle}>Latest Works</h1>
                    <h3 className={styles.caseTitle}>Case Studies & Development</h3>

                </div>

                <h5>Include Work Here</h5>

                <hr className={styles.horizLine2}></hr>


            </section>

            <section className={styles.contact}>
                <div className={styles.contactContainer}>

                <h1 className={styles.contactTitle}>Let's Connect</h1>
                <a href="mailto:iwanjohi11@gmail.com" className={styles.emailText}>iwanjohi11@gmail.com</a>
                <h4 className={styles.phoneNumberText}>(+254) - 798 - 765 - 024</h4>
                </div>

            </section>

            <section className={styles.socialMedia}>

                <div className={styles.linkedinCircle}>
                    <a href="https://www.linkedin.com/in/ian-wanjohi/" target="_blank" rel="noreferrer"><img src="/assets/linkedin-logo.png" alt="Ian Wanjohi's LinkedIn" className={styles.linkedinImage}></img></a>
                </div>
                <div className={styles.dribbbleCircle}>
                    <a href="https://dribbble.com/ianwanjohi" target="_blank" rel="noreferrer"><img src="/assets/dribbble-logo.png" alt="Ian Wanjohi's Dribbble" className={styles.dribbbleImage}></img></a>
                </div>
                <div className={styles.githubCircle}>
                    <a href="https://github.com/iwanjo" target="_blank" rel="noreferrer"><img src="/assets/github-logo.png" alt="Ian Wanjohi's Github" className={styles.githubImage}></img></a>
                </div>


                    

            </section>

            <div className={styles.copyRight}>
                <p>&copy; 2021 Ian Kamanu Wanjohi</p>

            </div>

            

        </>
    )

}

export default Home;