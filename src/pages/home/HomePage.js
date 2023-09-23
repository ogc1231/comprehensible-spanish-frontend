import React from 'react'

import styles from "../../styles/HomePage.module.css";
import hero1 from "../../assets/hero1.png"

const HomePage = () => {
  return (
    <div>
      <div className={styles.Hero}>
        <div className={styles.HeroDiv}>
          <h1>Spanish Comprehensible Resources</h1>
          <p>A curated directory of Spanish Language resources to suit your needs whatever your level.</p>
          <a className={styles.HeroBtn} href='/resources' >Explore Resources</a>
        </div>
        <img src={hero1} alt='hero' className={styles.HeroImage}/>
      </div>
      
    </div>
  )
}

export default HomePage