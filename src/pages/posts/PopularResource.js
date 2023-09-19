import React from 'react'
import styles from "../../styles/PopularResource.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const PopularResource = (props) => {
    const {resource, imageSize=55} = props;
    const {id, favourites_id, owner} = resource;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div className='my-3 d-flex align-items-center'>
            <div>
                <Link className='align-self-center' to={`/resources/${id}`}>
                    <Avatar src={resource.image} height={imageSize}/>
                </Link>
            </div>
            <div className={`mx-2 ${styles.Font}`}>
                {resource.title}
            </div>
            <div>
                {currentUser && !is_owner && (
                    favourites_id ? (
                        <span onClick={() => {}}>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Remove from favourites!</Tooltip>}
                            >
                                <i className={`fas fa-heart ${styles.Heart}`} />
                            </OverlayTrigger>
                        </span>
                    ) : (
                        <span onClick={() => {}}>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Add to favourites!</Tooltip>}
                            >
                                <i className={`far fa-heart ${styles.HeartOutline}`} />
                            </OverlayTrigger>
                        </span>
                    )
                )}
            </div>
        </div>
  )
}

export default PopularResource

// {favourite_id ? (
//     <span onClick={handleUnfavourite}>
//       <OverlayTrigger
//       placement="top"
//       overlay={<Tooltip>Remove from favourites!</Tooltip>}
//       >
//         <i className={`fas fa-heart ${styles.Heart}`} />
//       </OverlayTrigger>
//     </span>
//   ) : currentUser ? (
//     <span onClick={handleFavourite}>
//       <OverlayTrigger
//       placement="top"
//       overlay={<Tooltip>Add to favourites!</Tooltip>}
//       >
//         <i className={`far fa-heart ${styles.HeartOutline}`} />
//       </OverlayTrigger>
//       </span>
