import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/ContactFormConfirmation.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useRedirect } from "../../hooks/useRedirect";


const ContactFormConfirmation = () => {
  useRedirect("loggedOut");
  const [count, setCount] = useState(5);
  const navigate = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    count === 0 && navigate.push("/");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (    
    <Row className={styles.Row}>
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Thank you</h1>
          <p className="text-center">We have received your message and will be in touch soon!</p>   
          <p className="text-center">Redirecting you in {count} sec </p> 
        </Container>
      </Col>
    </Row>
  );
};

export default ContactFormConfirmation;
