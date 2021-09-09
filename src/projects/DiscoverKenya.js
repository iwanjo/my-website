import React from "react";
import { Helmet } from "react-helmet";
import styles from "./css/DiscoverKenya.module.css";
import ProjectsNavbar from "./ProjectsNavbar";
import ScrollToTop from "react-scroll-to-top";

export default function DiscoverKenya() {
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
          <h1 className={styles.challengeTitle}>The Challenge</h1>
          <p className={styles.challengeText}>
            As a result of the COVID-19 virus and the various safety measures
            implemented, numerous areas of economic activity were dealt a severe
            blow. At the height of the pandemic in the spring and summer of
            2020, many countries imposed bans on international travel,
            lockdowns, physical distancing and curfews, which had harsh economic
            consequences. One area that stood out to me is the tourism industry
            in Kenya. The country is one of the leading tourist destinations in
            Africa, offering a wide range of attractions such as pristine
            beaches, safaris, deserts and more. 
            <br />
            <br />
            Due to the pandemic prevention
            measures and their far-reaching consequences, the industry suffered
            massive job losses, closure of local travel and tourism agencies,
            and revenue losses. Tourism arrivals in Kenya dropped by more than
            70% in Kenya during the first few months of 2020, and the country
            lost more than $1 Billion in revenue from annual tourism
            earnings.
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
    </>
  );
}
