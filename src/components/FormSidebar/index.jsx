import React from "react";
import styles from "./index.module.css";

const FormSidebar = () => {
  return (
    <div className={styles.imageContainer + " d-md-block"}>
      <img
        src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?size=626&ext=jpg"
        alt="image"
        height={"60%"}
      />
    </div>
  );
};

export default FormSidebar;
