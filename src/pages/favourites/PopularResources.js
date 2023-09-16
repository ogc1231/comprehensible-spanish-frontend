import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PopularResources = () => {
    const [favouriteData, setFavouriteData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });

    return (
        <Container className="{appStyles.Content}">
            <p>Most Popular Resources</p>
        </Container>
    )
}


export default PopularResources;