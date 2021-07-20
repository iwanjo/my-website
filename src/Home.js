import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import NavbarArea from './Navbar';
import styles from './css-modules/Home.module.css';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

function Home() {
    

    return(
        <>
        <Helmet>
            <title>Ian Wanjohi | Home</title>
        </Helmet>
        
        <ScrollToTop smooth color="#BADAE8"/>
        <NavbarArea />
        {/* <img src="/assets/Oreti.png" height={100}></img> */}
        <div className={styles.desContainer}>
            <img src="/assets/des1.png" className={styles.des1} alt=""></img>
        </div>

            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <img src="/assets/i1.jpg" alt="Portrait Shot of Ian Wanjohi" className={styles.mainImg}></img>
                    <h1 className={styles.helloTitle}>Hello! <span className={styles.fancyTitle}>I'm</span> Ian Wanjohi</h1>
                    <h3 className={styles.jobTitle}>Software Developer & UX-UI Designer from Nairobi, Kenya</h3>
                    <p className={styles.missionText}>Software developer specializing in integrating UX & UI Design to create sustainable solutions that positively impact people’s lives.</p>
                    
                    <div className={styles.buttonGroup}>
                        <button className={styles.resumeBtn}>Download CV</button>
                        <a href="https://calendly.com/iwanjo/meet" target="_blank" rel="noreferrer"><button className={styles.calendlyBtn}>Let's chat on Calendly</button></a>
                    </div>



                        


                </div>

            </section>

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
            <Footer />

        </>
    )

}

export default Home;