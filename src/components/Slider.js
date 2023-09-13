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

      <Carousel.Item interval={2000}>
      <img src={ar} alt="ar"/>
        <Carousel.Caption>
          <h3>Argentina</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={bo} alt="ar"/>
        <Carousel.Caption>
          <h3>Bolvia</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={ch} alt="ar"/>
        <Carousel.Caption>
          <h3>Chile</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={co} alt="ar"/>
        <Carousel.Caption>
          <h3>Colombia</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={cr} alt="ar"/>
        <Carousel.Caption>
          <h3 className={styles.Textb}>Costa Rica</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={cu} alt="ar"/>
        <Carousel.Caption>
          <h3 className={styles.Text}>Cuba</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={dr} alt="ar"/>
        <Carousel.Caption>
          <h3>Dominican Republic</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={ec} alt="ar"/>
        <Carousel.Caption>
          <h3>Ecuador</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={el} alt="ar"/>
        <Carousel.Caption>
          <h3>El Salvador</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={eg} alt="ar"/>
        <Carousel.Caption>
          <h3>Equatorial Guinea</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={gu} alt="ar"/>
        <Carousel.Caption>
          <h3 className={styles.Textb}>Guatemala</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={ho} alt="ar"/>
        <Carousel.Caption>
          <h3>Honduras</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={me} alt="ar"/>
        <Carousel.Caption>
          <h3 className={styles.Textb}>Mexico</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={ni} alt="ar"/>
        <Carousel.Caption>
          <h3>Nicaragua</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={pa} alt="ar"/>
        <Carousel.Caption>
          <h3>Panama</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={pr} alt="ar"/>
        <Carousel.Caption>
          <h3>Paraguay</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={pe} alt="ar"/>
        <Carousel.Caption>
          <h3 className={styles.Textb}>Peru</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={es} alt="ar"/>
        <Carousel.Caption>
          <h3>Spain</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={ur} alt="ar"/>
        <Carousel.Caption>
          <h3 className={styles.Text}>Uruguay</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={ve} alt="ar"/>
        <Carousel.Caption>
          <h3>Venezuela</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;