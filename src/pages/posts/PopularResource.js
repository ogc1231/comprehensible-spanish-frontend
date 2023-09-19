import React from 'react'
import styles from "../../styles/PopularResource.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';

const PopularResource = (props) => {
    const {resource, imageSize=55} = props;
    const {id, favourites_id, image, owner} = resource;

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
        </div>
  )
}

export default PopularResource