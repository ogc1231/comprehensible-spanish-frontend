import React from 'react'
import styles from "../../styles/HomePage.module.css";
import hero from "../../assets/hero.jpg"

const HomePage = () => {
  return (
    <div className={styles.HeroDiv}>
      <img src={hero} alt='hero' className={styles.HeroImage}/>
    </div>
  )
}

export default HomePage