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

function Home() {
    

    return(
        <>
        <ScrollToTop smooth color="#BADAE8"/>
        <NavbarArea />
            <Container>

                <section className={styles.heroSection}>
                <Row>
                    <Col sm={true}>
                        <div>
                        <h1 className={styles.helloTitle}>Hello!</h1>
                        <h1 className={styles.nameTitle}><span className={styles.fancyTitle}>I'm </span>Ian Wanjohi</h1>
                        <div className={styles.nameLine}></div>
                        <p className={styles.missionText}>Software developer specializing in integrating UX & UI Design to create sustainable solutions that positively impact people’s lives.</p>
                        </div>
                    </Col>

                    <Fade top>
                    <Col sm={true}>
                        <img src="/assets/i1.jpg" alt="Portrait Shot of Ian Wanjohi" loading="eager" className={styles.mainImg}></img>
                    </Col>
                    </Fade>
                </Row>
                </section>

            </Container>

            

        </>
    )

}

export default Home;