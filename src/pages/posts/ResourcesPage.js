import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Resource from "./Resource";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/ResourcesPage.module.css";
import ntstyles from "../../styles/NotFound.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularResources from "./PopularResources";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import CountryFilter from "../../components/CountryFilter";

function ResourcesPage({ message, filter = "" }) {
  const [resources, setResources] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

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

  }, [filter, query, pathname, currentUser]);

  return (
    
    <Row className="h-100" >
      
      <Col className="py-2 pd-2 p-lg-2" lg={10}>
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
        
        <select onChange={(e) => setQuery(e.target.value)}>
        <option value="">All Dialects</option>
        <option value="mixed">Mixed</option>
        <option value="argentina">Argentina</option>
        <option value="bolivia">Bolivia</option>
        <option value="canary_islands">Canary Islands</option>
        <option value="chile">Chile</option>
        <option value="colombia">Colombia</option>
        <option value="costa_rica">Costa Rica</option>
        <option value="cuba">Cuba</option>
        <option value="dominican_republic">Dominican Republic</option>
        <option value="ecudaor">Ecuador</option>
        <option value="el_salvador">El Salvador</option>
        <option value="equatorial_guinea">Equatorial Guinea</option>
        <option value="guatemala">Guatemala</option>
        <option value="honduras">Honduras</option>
        <option value="mexico">Mexico</option>
        <option value="nicaragua">Nicaragua</option>
        <option value="panama">Panama</option>
        <option value="paraguay">Paraguay</option>
        <option value="puerto_rico">Puerto Rico</option>
        <option value="peru">Peru</option>
        <option value="spain">Spain</option>
        <option value="uruguay">Uruguay</option>
        <option value="venezuela">Venezuela</option>
      </select>

      <select onChange={(e) => setQuery(e.target.value)}>
        <option value="">All Levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="easy_native">Easy Native</option>
        <option value="adv_native">Advanced Native</option>
      </select>

      <select onChange={(e) => setQuery(e.target.value)}>
        <option value="">All Media Types</option>
        <option value="podcast">Podcasts</option>
        <option value="youtube">YouTube</option>
      </select>
        

        {hasLoaded ? (
          <>
            {resources.results.length ? (
              <InfiniteScroll className={styles.ResourceLayout}
                children={resources.results.map((resource) => (
                  <Resource key={resource.id} {...resource} setResources={setResources} />
                ))}
                dataLength={resources.results.length}
                loader={<Asset spinner />}
                hasMore={!!resources.next}
                next={() => fetchMoreData(resources, setResources)}
              />
            ) : (
              <Container className={`${appStyles.Content} ${ntstyles.NoResults}`}>
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
      <Col md={2} className="d-none d-lg-block p-0 p-lg-2">
        <PopularResources />
      </Col>
    </Row>
  );
}

export default ResourcesPage;