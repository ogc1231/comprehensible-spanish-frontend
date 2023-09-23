import React, {useState} from "react";
import styles from "../../styles/Resource.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import level1 from "../../assets/level1.png";
import level2 from "../../assets/level2.png";
import level3 from "../../assets/level3.png";
import level4 from "../../assets/level4.png";
import level5 from "../../assets/level5.png";
import ModalDelete from "../../components/ModalDelete";

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

  const showDeleteModal = (event) => {
    setShow(true);
  };

  const [show, setShow] = useState(false);


  return (
    <>
      <Card className={styles.Resource}>
        {resourcePage && <Card.Body className={styles.ResourceProfile}> 
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
                  handleDelete={showDeleteModal}
                />}
            </div>
          </Media>
        </Card.Body>}
        <Link to={`/resources/${id}`}>
          <Card.Img src={image} alt={title} className={styles.ResourceImg}/>
        </Link>
        <Card.Body className={styles.ResourceBar}>
          {title && <Card.Title className="text-center">{title}</Card.Title>}
          {resourcePage && <Card.Text>{desc}</Card.Text>}
          {resourcePage && 
          <Card.Text>
              <a href={resource_url} target="_blank" rel="noreferrer">Link</a>
          </Card.Text>
          }
          {country_filter && <Card.Text className={styles.Country}>{country_filter}</Card.Text>}
          {resource_type_filter === 'youtube' && <Card.Text className={styles.Type1}>{resource_type_filter}</Card.Text>}
          {resource_type_filter === 'podcast' && <Card.Text className={styles.Type2}>{resource_type_filter}</Card.Text>}
          {difficulty_level_filter === 'beginner' && <Card.Text className={styles.Level1}><img src={level1} alt="beginner logo" />{difficulty_level_filter}</Card.Text>}
          {difficulty_level_filter === 'intermediate' && <Card.Text className={styles.Level2}><img src={level2} alt="intermediatelogo" />{difficulty_level_filter}</Card.Text>}
          {difficulty_level_filter === 'advanced' && <Card.Text className={styles.Level3}><img src={level3} alt="advanced logo" />{difficulty_level_filter}</Card.Text>}
          {difficulty_level_filter === 'easy_native' && <Card.Text className={styles.Level4}><img src={level4} alt="easy native logo" />{difficulty_level_filter}</Card.Text>}
          {difficulty_level_filter === 'adv_native' && <Card.Text className={styles.Level5}><img src={level5} alt="advanced native logo" />{difficulty_level_filter}</Card.Text>}
          <div > 
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
                overlay={<Tooltip>Sign in to add to favourites!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            )}
            {favourites_count}
          </div>
        </Card.Body>
      </Card>
      <ModalDelete
        show={show}
        handleClose={() => setShow(false)}
        onConfirm={handleDelete}
        title="resource"
      />
    </>
  );
};

export default Resource;