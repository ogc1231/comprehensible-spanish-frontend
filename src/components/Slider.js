import Carousel from 'react-bootstrap/Carousel';
import styles from "../styles/Slider.module.css";
import ar from "../assets/ar.png";
import bo from "../assets/bo.png";
import ch from "../assets/ch.png";

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
    </Carousel>
  );
}

export default Slider;