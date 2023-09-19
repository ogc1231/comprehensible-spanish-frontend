import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const PopularResources = () => {
    const [resourceData, setResourceData] = useState({
        pageResources: { results: []},
        popularResources: { results: []},
    });
    const { popularResources } = resourceData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(
              "/resources/?ordering=-favourites_count"
            );
            setResourceData((prevState) => ({
              ...prevState,
              popularResources: data,
            }));
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [currentUser]);

    return (
        <Container>
            <p>Popular Resources</p>
            {popularResources.results.map((resource) => (
            <p key={resource.id}>{resource.owner}</p>
          ))}
        </Container>
    )
}

export default PopularResources