import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/ContactForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";


const ContactForm = () => {
  useRedirect("loggedOut");
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = contactFormData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setContactFormData({
      ...contactFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/forms/", contactFormData);
      history.push("/confirmation");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (    
    <Row className={styles.Contact}>
      <Col>
        <Container className={`${appStyles.Content} 'p-4' `}>
          <h1 className={styles.Header}>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="example: Joe Smith"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example: j@smith.com"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="example: "
                value={subject}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.message?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={message}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.message?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
            className={`${btnStyles.Button} ${btnStyles.Width} ${btnStyles.Bright}`}
            type="submit"
            >
              Submit
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
            </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default ContactForm;