import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function ResourceTypeDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i className="fa-solid fa-headphones"></i>Resource Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">YouTube - Video</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Podcast - Audio</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ResourceTypeDropdown;