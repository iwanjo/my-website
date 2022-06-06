import styles from './css-modules/Footer.module.css';

import React from 'react'

function Footer() {
    return (
        <>
         <section className={styles.contact} id="section4">
        <div className={styles.contactContainer}>
          <h1 className={styles.contactTitle}>Let's get in touch</h1>
          <p className={styles.contactText}>
            Keen to collaborate and work on impactful projects💻. Let's connect
            via{" "}
            <a href="mailto:iwanjohi11@gmail.com" className={styles.emailText}>
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
        </>
    )
}

export default Footer
