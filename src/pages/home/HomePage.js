import React from 'react'
import styles from "../../styles/HomePage.module.css";
import hero1 from "../../assets/hero1.png"

const HomePage = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <h1>Spanish</h1>
        <p>Wow</p>
        <button></button>
        <button></button>
      </div>
      <img src={hero1} alt='hero' className={styles.HeroImage}/>
    </div>
  )
}

export default HomePage