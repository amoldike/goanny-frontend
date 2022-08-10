import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import CustomButton from "../../basic-ui-components/CustomButton";
import validators from "../../helpers/validators";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/users/login", data)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data.message);
        if (res.data.message != "Invalid Details") {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.token);
          navigate("../home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Sign In To Your Account!</h2>
      <Form method="post" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            required={true}
            valid={isValidEmail}
            invalid={isInvalidEmail}
            onChange={(e) => {
              const res = validators(e.target.value, "email");
              setIsValidEmail(res);
              setIsInvalidEmail(!res);
              setEmail(e.target.value);
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            required={true}
            valid={isValidPassword}
            invalid={isInvalidPassword}
            onChange={(e) => {
              const res = validators(e.target.value, "password");
              setIsValidPassword(res);
              setIsInvalidPassword(!res);
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <CustomButton btnText="Continue To Log In" />
      </Form>
      <p>
        New to Goanny? <Link to="/register">Register</Link> Here!
      </p>
    </div>
  );
};

export default LoginForm;
