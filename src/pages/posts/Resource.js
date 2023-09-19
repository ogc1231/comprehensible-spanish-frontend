import React from "react";
import styles from "../../styles/Resource.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import level1 from "../../assets/level1.png";
import level2 from "../../assets/level2.png";
import level3 from "../../assets/level3.png";

const Resource = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    updated_at,
    title,
    image,
    resource_url,
    country_filter,
    resource_type_filter,
    difficulty_level_filter,
    favourite_id,
    favourites_count,
    desc,
    resourcePage,
    setResources,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/resources/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/resources/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFavourite = async () => {
    try {
      const { data } = await axiosRes.post("/favourites/", { resource: id });
      setResources((prevResources) => ({
        ...prevResources,
        results: prevResources.results.map((resource) => {
          return resource.id === id
            ? { ...resource, favourites_count: resource.favourites_count + 1, favourite_id: data.id }
            : resource;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfavourite = async () => {
    try {
      await axiosRes.delete(`/favourites/${favourite_id}/`);
      setResources((prevResources) => ({
        ...prevResources,
        results: prevResources.results.map((resource) => {
          return resource.id === id
            ? { ...resource, favourites_count: resource.favourites_count - 1, favourite_id: null }
            : resource;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Resource}>
      <Link to={`/resources/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {desc && <Card.Text>{desc}</Card.Text>}
        {resource_url && 
        <Card.Text>
            <a href={resource_url} target="_blank" rel="noreferrer">Link</a>
        </Card.Text>
        }
        {country_filter && <Card.Text className={styles.Country}>{country_filter}</Card.Text>}
        {resource_type_filter === 'youtube' && <Card.Text className={styles.Type1}>{resource_type_filter}</Card.Text>}
        {resource_type_filter === 'podcast' && <Card.Text className={styles.Type2}>{resource_type_filter}</Card.Text>}
        {difficulty_level_filter === 'learner' && <Card.Text className={styles.Level1}><img src={level1} alt="logo" />{difficulty_level_filter}</Card.Text>}
        {difficulty_level_filter === 'easy_native' && <Card.Text className={styles.Level2}><img src={level2} alt="logo" />{difficulty_level_filter}</Card.Text>}
        {difficulty_level_filter === 'native' && <Card.Text className={styles.Level3}><img src={level3} alt="logo" />{difficulty_level_filter}</Card.Text>}
        {/* styling? */}
        <div className={styles.ResourceBar}> 
          {favourite_id ? (
            <span onClick={handleUnfavourite}>
              <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Remove from favourites!</Tooltip>}
              >
                <i className={`fas fa-heart ${styles.Heart}`} />
              </OverlayTrigger>
              
            </span>
          ) : currentUser ? (
            <span onClick={handleFavourite}>
              <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Add to favourites!</Tooltip>}
              >
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </OverlayTrigger>
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to favourite resources!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {favourites_count}
        </div>
      </Card.Body>
      <Card.Body className={styles.ResourceProfile}> 
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={25} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && resourcePage && 
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Resource;