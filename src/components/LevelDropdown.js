import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function LevelDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i className="fa-solid fa-signal"></i>Level
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Learner</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Easy Native</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Native</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LevelDropdown;