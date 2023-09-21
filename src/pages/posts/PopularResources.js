import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container '
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from "../../components/Asset";
import PopularResource from './PopularResource';


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
            {popularResources.results.length ? (
                <>
                    <p>Popular Resources</p>
                    {popularResources.results.map((resource) => (
                        <PopularResource key={resource.id} resource={resource} />
                    ))}
                </>
            ):(
                <Asset spinner />
            )}
        </Container> 
    )
}

export default PopularResources