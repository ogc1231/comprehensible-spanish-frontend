import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Resource from "../posts/Resource";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";


function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileResources, setProfileResources] = useState({ results: [] });
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileResources }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/resources/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileResources(profileResources);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className={`m-2 ${styles.Name}`}>{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.resources_count}</div>
              <div>resources</div>
            </Col>
          </Row>
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className='text-center'>Resources added by {profile?.owner}</p>
      <hr />
      {profileResources.results.length ? (
        <InfiniteScroll
          children={profileResources.results.map((resource) => (
            <Resource key={resource.id} {...resource} setResources={setProfileResources} />
          ))}
          dataLength={profileResources.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileResources.next}
          next={() => fetchMoreData(profileResources, setProfileResources)}
        />
      ) : (
        <Asset
          src={NoResults}
          height={250}
          message={`No results found, ${profile?.owner} hasn't added any resources yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 pd-2 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* <PopularResources /> */}
        <p>Popular Resources</p>
      </Col>
    </Row>
  );
}

export default ProfilePage;