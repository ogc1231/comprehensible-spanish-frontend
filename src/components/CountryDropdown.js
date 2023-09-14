import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styles from "../styles/CountryDropdown.module.css";

function CountryDropdown() {
  return (
    <Dropdown className={styles.CountryDropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i className="fa-solid fa-earth-americas"></i>Country
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.Menu}>
        <Dropdown.Item href="#/action-0">Mixed</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Argentina</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bolivia</Dropdown.Item>
        <Dropdown.Item href="#/action-ca">Canary Islands</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chile</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Colombia</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Costa Rica</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Cuba</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Dominican Republic</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Ecuador</Dropdown.Item>
        <Dropdown.Item href="#/action-9">El Salvador</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Equatorial Guinea</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Guatemala</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Honduras</Dropdown.Item>
        <Dropdown.Item href="#/action-13">Mexico</Dropdown.Item>
        <Dropdown.Item href="#/action-14">Nicaragua</Dropdown.Item>
        <Dropdown.Item href="#/action-15">Panama</Dropdown.Item>
        <Dropdown.Item href="#/action-16">Paraguay</Dropdown.Item>
        <Dropdown.Item href="#/action-17">Peru</Dropdown.Item>
        <Dropdown.Item href="#/action-18">Spain</Dropdown.Item>
        <Dropdown.Item href="#/action-19">Uruguay</Dropdown.Item>
        <Dropdown.Item href="#/action-20">Venezuela</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CountryDropdown;