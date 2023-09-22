import React from 'react'
import styles from "../../styles/HomePage.module.css";
import hero1 from "../../assets/hero1.png"

const HomePage = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroDiv}>
        <h1>Spanish Comprehensible Resources</h1>
        <p>A curated directory of Spanish Language resources to suit your needs whatever your level.</p>
        <button className={styles.HeroBtn}>Explore Resources</button>
      </div>
      <img src={hero1} alt='hero' className={styles.HeroImage}/>
    </div>
  )
}

export default HomePage