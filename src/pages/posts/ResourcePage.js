import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Resource from "./Resource";
import PopularResources from "./PopularResources";


function ResourcePage() {
  const { id } = useParams();
  const [resource, setResource] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: resource }] = await Promise.all([
          axiosReq.get(`/resources/${id}`),
        ]);
        setResource({ results: [resource] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  return (
    <Row className="h-100 pt-4">
      <Col className="py-2 pd-2 p-lg-2" lg={5} >
        <Resource {...resource.results[0]} setResources={setResource} resourcePage />
        <Container className={`mt-2 ${appStyles.Content}`}>
          Comments/////////
        </Container>
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        <PopularResources />
      </Col>
    </Row>
  );
}

export default ResourcePage;