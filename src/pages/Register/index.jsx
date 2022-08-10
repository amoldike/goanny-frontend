import React from "react";
import FormSidebar from "../../components/FormSidebar";
import RegistrationForm from "../../components/RegistrationForm";
import styles from "./index.module.css";

const Register = () => {
  return (
    <>
      <div className={styles.homeContainer + " d-md-flex"}>
        <FormSidebar />
        <div className={styles.formContainer + " w-md-75"}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default Register;
