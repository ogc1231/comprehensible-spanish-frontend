import React from 'react'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer class="footer">
            <ul class="social-links">
                <li class="social-link"><a class="social-linka" href="https://instagram.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on Instagram (opens in a new tab)"><i
                            class="fa-brands fa-instagram"></i></a></li>
                <li class="social-link"><a class="social-linka" href="https://facebook.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on Facebook (opens in a new tab)"><i
                            class="fa-brands fa-facebook"></i></a></li>
                <li class="social-link"><a class="social-linka" href="https://twitter.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on Twitter (opens in a new tab)"><i
                            class="fa-brands fa-twitter"></i></a></li>
                <li class="social-link"><a class="social-linka" href="https://www.tiktok.com" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Follow us on TikTok (opens in a new tab)"><i
                            class="fa-brands fa-tiktok"></i></a></li>
            </ul>
            <p class="credit">Developed by<a class="credit-link" href="https://github.com/ogc1231" target="_blank"
                    rel="noopener noreferrer nofollow"> Oliver Craigie</a> 2022</p>
        </footer>
  )
}

export default Footer