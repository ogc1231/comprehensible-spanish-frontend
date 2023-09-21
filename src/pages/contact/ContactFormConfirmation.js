import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/ContactFormConfirmation.module.css";
import appStyles from "../../App.module.css";

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";


const ContactFormConfirmation = () => {
  useRedirect("loggedOut");
  const [count, setCount] = useState(5);
  const navigate = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      // update the state after 1000ms
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    // when count is 0, navigate
    count === 0 && navigate.push("/");
    // clean up the interval
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
