import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Resource from "./Resource";
import PopularResources from "./PopularResources";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function ResourcePage() {
  const { id } = useParams();
  const [resource, setResource] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: resource }, { data: comments }] = await Promise.all([
          axiosReq.get(`/resources/${id}`),
          axiosReq.get(`/comments/?resource=${id}`),
        ]);
        setResource({ results: [resource] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  return (
    <Row className="h-100 pt-4">
      <Col className="py-2 pd-2 p-lg-2" lg={5} >
        <Resource {...resource.results[0]} setResources={setResource} resourcePage />
        <Container className={`mt-2 ${appStyles.Content}`}>
        {currentUser ? (
          <CommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            resource={id}
            setResource={setResource}
            setComments={setComments}
          />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setResource={setResource}
                  setComments={setComments}
                />
            ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
        ) : currentUser ? (
          <span>No comments yet, be the first to comment!</span>
        ) : (
          <span>No comments... yet</span>
        )}
        </Container>
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        <PopularResources />
      </Col>
    </Row>
  );
}

export default ResourcePage;