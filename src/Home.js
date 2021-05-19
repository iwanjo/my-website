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
            <Container>

                <section className={styles.heroSection}>
                <Row>
                    <Col sm={true}>
                        <div className={styles.heroSection1}>
                        <h1 className={styles.helloTitle}>Hello!</h1>
                        <h1 className={styles.nameTitle}><span className={styles.fancyTitle}>I'm </span>Ian Wanjohi</h1>
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

                {/* <p className={styles.trial}>Designer & Developer</p> */}
                </section>

            </Container>

            <hr className={styles.horizLine}></hr>

            <section className={styles.portfolio}>

                <div className={styles.titleArea}>

                    <h1 className={styles.latestTitle}>Latest Works</h1>
                    <h3 className={styles.caseTitle}>Case Studies & Development</h3>

                </div>

                <h5>Include Work Here</h5>

                <hr className={styles.horizLine2}></hr>


            </section>

            

        </>
    )

}

export default Home;