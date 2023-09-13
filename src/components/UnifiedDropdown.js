import React from "react";
import CountryDropdown from "./CountryDropdown";
import LevelDropdown from "./LevelDropdown";
import ResourceTypeDropdown from "./ResourceTypeDropdown";
import styles from "../styles/UnifiedDropdown.module.css";


function UnifiedDropdown() {
    return (
        <div className={styles.UnifiedDropdown}>
            <CountryDropdown />
            <LevelDropdown />
            <ResourceTypeDropdown />
        </div>
    );
  }
  
  export default UnifiedDropdown;