import React from "react";
import { Button } from "reactstrap";
import { MdArrowForward as ForwardIcon } from "react-icons/md";
import styles from "./index.module.css";

const CustomButton = ({ btnText }) => {
  return (
    <Button className={styles.submitBtn}>
      {btnText} <ForwardIcon />
    </Button>
  );
};

export default CustomButton;
