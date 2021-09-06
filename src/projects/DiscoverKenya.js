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

      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.leftContainer}>
          <img src="../assets/dk-logo.svg" alt="Discover Kenya Logo" className={styles.logo} />
            <h1 className={styles.projectTitle}>Discover Kenya</h1>
            <p className={styles.projectText}>Connecting users to beautiful photos of Kenya, while creating a community of visual contributors.</p>

          </div>

          <div className={styles.rightContainer}></div>
        </div>
        <div class={styles.waves}></div>
      </section>
    </>
  );
}
