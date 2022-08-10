import React from "react";
import FormSidebar from "../../components/FormSidebar";
import LoginForm from "../../components/LoginForm";
import styles from "./index.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.homeContainer + " d-md-flex"}>
        <FormSidebar />
        <div className={styles.formContainer + " w-md-50"}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
