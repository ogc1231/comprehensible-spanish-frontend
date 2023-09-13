import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../styles/Slider.module.css";
import ar from "../assets/ar.png";
import bo from "../assets/bo.png";
import ch from "../assets/ch.png";
import co from "../assets/co.png";
import cr from "../assets/cr.png";
import cu from "../assets/cu.png";
import dr from "../assets/dr.png";
import ec from "../assets/ec.png";
import eg from "../assets/eg.png";
import el from "../assets/el.png";
import es from "../assets/es.png";
import gu from "../assets/gu.png";
import ho from "../assets/ho.png";
import me from "../assets/me.png";
import ni from "../assets/ni.png";
import pa from "../assets/pa.png";
import pe from "../assets/pe.png";
import pr from "../assets/pr.png";
import ur from "../assets/ur.png";
import ve from "../assets/ve.png";

function Slider() {
  return (
    <Carousel className={styles.Slider}>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ar} alt="ar"/>
        <h3 className={styles.FlagFont}>Argentina</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={bo} alt="bolivia"/>
        <h3 className={styles.FlagFont}>Bolivia</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ch} alt="chile"/>
        <h3 className={styles.FlagFont}>Chile</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={co} alt="colombia"/>
        <h3 className={styles.FlagFont}>Colombia</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={cr} alt="costa rica"/>
        <h3 className={styles.FlagFont}>Costa Rica</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={cu} alt="cuba"/>
        <h3 className={styles.FlagFont}>Cuba</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={dr} alt="dominican republic"/>
        <h3 className={styles.FlagFont}>Dominican Republic</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ec} alt="ecuador"/>
        <h3 className={styles.FlagFont}>Ecuador</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={el} alt="el salvador"/>
        <h3 className={styles.FlagFont}>El Salvador</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={eg} alt="equatorial guinea"/>
        <h3 className={styles.FlagFont}>Equatorial Guinea</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={gu} alt="guatemala"/>
        <h3 className={styles.FlagFont}>Guatemala</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ho} alt="honduras"/>
        <h3 className={styles.FlagFont}>Honduras</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={me} alt="mexico"/>
        <h3 className={styles.FlagFont}>Mexico</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ni} alt="nicaragua"/>
        <h3 className={styles.FlagFont}>Nicaragua</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={pa} alt="panama"/>
        <h3 className={styles.FlagFont}>Panama</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={pr} alt="paraguay"/>
        <h3 className={styles.FlagFont}>Paraguay</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={pe} alt="peru"/>
        <h3 className={styles.FlagFont}>Peru</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={es} alt="spain"/>
        <h3 className={styles.FlagFont}>Spain</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ur} alt="uruguay"/>
        <h3 className={styles.FlagFont}>Uruguay</h3>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className={styles.Flag}>
        <img src={ve} alt="venezuela"/>
        <h3 className={styles.FlagFont}>Venezuela</h3>
      </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;