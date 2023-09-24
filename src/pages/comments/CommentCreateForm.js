import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../../styles/Button.module.css";

function CommentCreateForm(props) {
  const { resource, setResource, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        resource,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setResource((prevResource) => ({
        results: [
          {
            ...prevResource.results[0],
            comments_count: prevResource.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      <Button
        className={`${styles.Button} ${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} btn d-block ml-auto`}
        type="submit"
      >
        Post
      </Button>
    </Form>
  );
}

export default CommentCreateForm;