import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Resource from "./Resource";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/ResourcesPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import UnifiedDropdown from "../../components/UnifiedDropdown";
// import PopularResources from "../favourites/PopularResources";

function ResourcesPage({ message, filter = "" }) {
  const [resources, setResources] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data } = await axiosReq.get(`/resources/?${filter}search=${query}`);
        setResources(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchResources();
    }, 1000);

    return () => {
        clearTimeout(timer);
      };

  }, [filter, query, pathname]);

  return (
    
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search resources"
          />
        </Form>
        <UnifiedDropdown />

        {hasLoaded ? (
          <>
            {resources.results.length ? (
              <InfiniteScroll
                children={resources.results.map((resource) => (
                  <Resource key={resource.id} {...resource} setResources={setResources} />
                ))}
                dataLength={resources.results.length}
                loader={<Asset spinner />}
                hasMore={!!resources.next}
                next={() => fetchMoreData(resources, setResources)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* <PopularResources /> */}
        <p>Popular Resources</p>
      </Col>
    </Row>
  );
}

export default ResourcesPage;