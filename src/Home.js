import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import NavbarArea from './Navbar';
import styles from './css-modules/Home.module.css';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { Link } from 'react-router-dom';

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

            <section className={styles.heroSection} id="section1">
                <div className={styles.heroContainer}>
                    <img src="/assets/i1.jpg" alt="Portrait Shot of Ian Wanjohi" className={styles.mainImg}></img>
                    <h1 className={styles.helloTitle}>Hello 👋🏾 <span className={styles.fancyTitle}>I'm</span> Ian Wanjohi</h1>
                    <h3 className={styles.jobTitle}>Software Developer & UX-UI Designer</h3>
                    <p className={styles.missionText}>Software developer specializing in integrating UX & UI Design to create sustainable solutions that positively impact people’s lives.</p>
                    
                    <div className={styles.buttonGroup}>
                        <button className={styles.resumeBtn}>Download CV</button>
                        <a href="https://calendly.com/iwanjo/meet" target="_blank" rel="noreferrer"><button className={styles.calendlyBtn}>Let's chat on Calendly</button></a>
                    </div>

                </div>

            </section>

            <hr className={styles.horizLine}></hr>

            <section className={styles.portfolio} id="section3">

                <div className={styles.titleArea}>

                    <h1 className={styles.latestTitle}>Latest Projects</h1>
                    <h3 className={styles.caseTitle}>Case Studies & Development</h3>

                </div>

                <div className={styles.projectBlock}>
                    <div className={styles.leftProject}>
                    <img src="../assets/dk-banner.png" className={styles.bannerImg} alt="Discover Kenya Banner" />
                    </div>

                    <div className={styles.rightProject}>
                    <h1 className={styles.projectTitle}>Discover Kenya</h1>
                    <p className={styles.projectDescription}>Discover Kenya is a mobile application that allows tourism/safari companies, creative agencies and photographers to share visual content of Kenya and create a community of artistic contributors.</p>
                    <Link to="/discover-kenya">
                    <button className={styles.resumeBtn}>View Project</button>
                    </Link>
                    <a href="https://github.com/iwanjo/discover-kenya-v2" target="_blank" rel="noreferrer"><button className={styles.calendlyBtn}>GitHub Repo</button></a>
                    </div>

                    
                </div>

                <div className={styles.projectBlock}>
                    <div className={styles.leftProject}>
                    <img src="../assets/foresight-banner.png" className={styles.bannerImg} alt="Discover Kenya Banner"></img>
                    </div>

                    <div className={styles.rightProject}>
                    <h1 className={styles.projectTitle}>Foresight Agricultural Insights</h1>
                    <p className={styles.projectDescription}>Foresight is an agri-tech start-up that uses agricultural drone technology to determine crop quality and accurately estimate crop yields, providing a precise method of obtaining crop forecasts in the age of changing weather conditions. </p>
                    <Link to="/foresight">
                    <button className={styles.resumeBtn}>View Project</button>
                    </Link>
                    <a href="https://foresight-africa.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.calendlyBtn}>Website Link</button></a>
                    </div>

                    
                </div>

                <div className={styles.projectBlock}>
                    <div className={styles.leftProject}>
                    <img src="../assets/dk-banner.png" className={styles.bannerImg} alt="Discover Kenya Banner"></img>
                    </div>

                    <div className={styles.rightProject}>
                    <h1 className={styles.projectTitle}>Discover Kenya</h1>
                    <p className={styles.projectDescription}>Discover Kenya is a mobile application that allows tourism/safari companies, creative agencies and photographers to share visual content of Kenya and create a community of artistic contributors.</p>
                    <Link to="/discover-kenya">
                    <button className={styles.resumeBtn}>View Project</button>
                    </Link>
                    <a href="https://calendly.com/iwanjo/meet" target="_blank" rel="noreferrer"><button className={styles.calendlyBtn}>GitHub Repo</button></a>
                    </div>

                    
                </div>

                <div className={styles.projectBlock}>
                    <div className={styles.leftProject}>
                    <img src="../assets/dk-banner.png" className={styles.bannerImg} alt="Discover Kenya Banner"></img>
                    </div>

                    <div className={styles.rightProject}>
                    <h1 className={styles.projectTitle}>Discover Kenya</h1>
                    <p className={styles.projectDescription}>Discover Kenya is a mobile application that allows tourism/safari companies, creative agencies and photographers to share visual content of Kenya and create a community of artistic contributors.</p>
                    <Link to="/discover-kenya">
                    <button className={styles.resumeBtn}>View Project</button>
                    </Link>
                    <a href="https://calendly.com/iwanjo/meet" target="_blank" rel="noreferrer"><button className={styles.calendlyBtn}>GitHub Repo</button></a>
                    </div>

                    
                </div>

                

                <hr className={styles.horizLine2}></hr>


            </section>

            <section className={styles.contact} id="section4">
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