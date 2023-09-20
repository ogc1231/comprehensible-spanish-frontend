import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ResourceCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import { useRedirect } from "../../hooks/useRedirect";

function ResourceCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [resourceData, setResourceData] = useState({
    title: "",
    desc: "",
    image: "",
    resource_url: "",
    country_filter: "",
    difficulty_level_filter: "",
    resource_type_filter: "",
  });
  const { title, desc, image, resource_url, country_filter, difficulty_level_filter, resource_type_filter } = resourceData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setResourceData({
      ...resourceData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setResourceData({
        ...resourceData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", imageInput.current.files[0]);
    formData.append("resource_url", resource_url);
    formData.append("country_filter", country_filter);
    formData.append("difficulty_level_filter", difficulty_level_filter);
    formData.append("resource_type_filter", resource_type_filter);

    try {
      const { data } = await axiosReq.post("/resources/", formData);
      history.push(`/resources/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="desc"
          value={desc}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.desc?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="text"
          name="resource_url"
          value={resource_url}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.resource_url?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <select aria-label="Country" name="country_filter" id="country_filter" required onChange={handleChange}>
          <option value={country_filter} selected disabled>Country</option>
          <option value="mixed">Mixed</option>
          <option value="argentina">Argentina</option>
          <option value="bolivia">Bolivia</option>
          <option value="canary_islands">Canary Islands</option>
          <option value="chile">Chile</option>
          <option value="colombia">Colombia</option>
          <option value="costa_rica">Costa Rica</option>
          <option value="cuba">Cuba</option>
          <option value="dominican_republic">Dominican Republic</option>
          <option value="ecuador">Ecuador</option>
          <option value="el_salvador">El Salvador</option>
          <option value="equatorial_guinea">Equatorial Guinea</option>
          <option value="guatemala">Guatemala</option>
          <option value="honduras">Honduras</option>
          <option value="mexico">Mexico</option>
          <option value="nicaragua">Nicaragua</option>
          <option value="panama">Panama</option>
          <option value="paraguay">Paraguay</option>
          <option value="puerto_rico">Puerto Rico</option>
          <option value="peru">Peru</option>
          <option value="spain">Spain</option>
          <option value="uruguay">Uruguay</option>
          <option value="venezuela">Venezuela</option>
       </select>
      </Form.Group>
      {errors?.country_filter?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <select aria-label="Level" name="difficulty_level_filter" id="difficulty_level_filter" required onChange={handleChange}>
          <option value={difficulty_level_filter} selected disabled>Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="easy_native">Easy Native</option>
          <option value="adv_native">Advanced Native</option>
       </select>
      </Form.Group>
      {errors?.difficulty_level_filter?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <select aria-label="Resource Type" name="resource_type_filter"  id="resource_type_filter" required onChange={handleChange}>
          <option value={resource_type_filter} selected disabled>Resource Type</option>
          <option value="podcast">Podcast/Audio</option>
          <option value="youtube">YouTube/Video</option>
       </select>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 pd-2 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
                {image ? (
                  <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
                ) : (
                  <Form.Label
                  className={`d-flex justify-content-center ${styles.UploadImg}`}
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
                )}
                
                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ResourceCreateForm;