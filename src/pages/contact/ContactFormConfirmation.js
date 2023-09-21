import React from "react";
import styles from "../../styles/ContactFormConfirmation.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";


const ContactFormConfirmation = () => {
  useRedirect("loggedOut");
  return (    
    <Row className={styles.Row}>
      
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Thank you</h1>
          <p className="text-center">We have received your message and will be in touch soon!</p>    
        </Container>
      </Col>
    </Row>
  );
};

export default ContactFormConfirmation;