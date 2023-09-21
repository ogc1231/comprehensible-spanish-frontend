import React from "react";
import notfound404 from "../assets/notfound404.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";


const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={notfound404}
        message={`The page you're looking for doesn't exist`}
      />
      <div  >
        <a href="/resources" className={styles.NotFoundBtn}>Return to resources page</a>
      </div>
    </div>
  );
};

export default NotFound;