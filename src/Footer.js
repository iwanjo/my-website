import styles from './css-modules/Footer.module.css';

import React from 'react'

function Footer() {
    return (
        <>
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
        <p>&copy; 2021 <a href="https://www.linkedin.com/in/ian-wanjohi/" target="_blank" rel="noreferrer">Ian Kamanu Wanjohi</a></p>

        </div>
        </>
    )
}

export default Footer
