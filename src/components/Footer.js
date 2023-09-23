import React from 'react'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
            <ul className={styles.SocialLinks}>
                <li className={styles.SocialLink}><a className={styles.SocialLinka} href="https://instagram.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on Instagram (opens in a new tab)"><i className="fa-brands fa-instagram fa-lg"></i></a></li>
                <li className={styles.SocialLink}><a className={styles.SocialLinka} href="https://facebook.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on Facebook (opens in a new tab)"><i className="fa-brands fa-facebook fa-lg"></i></a></li>
                <li className={styles.SocialLink}><a className={styles.SocialLinka} href="https://twitter.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on Twitter (opens in a new tab)"><i className="fa-brands fa-twitter fa-lg"></i></a></li>
                <li className={styles.SocialLink}><a className={styles.SocialLinka} href="https://www.tiktok.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on TikTok (opens in a new tab)"><i className="fa-brands fa-tiktok fa-lg" ></i></a></li>
            </ul>
            <p className={styles.Credit}>Developed by<a className={styles.CreditLink} href="https://github.com/ogc1231" target="_blank"
                    rel="noopener noreferrer nofollow"> Oliver Craigie</a> 2023</p>
        </footer>
  )
}

export default Footer