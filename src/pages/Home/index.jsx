import React, { useEffect } from "react";
import axios from "axios";
import styles from "./index.module.css";
import authHeader from "../../helpers/authHeader";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/users/home", authHeader);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const loginHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("../login");
  };
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome To Home Page</h1>
      <button onClick={loginHandler}>Log Out</button>
    </div>
  );
};

export default Home;
