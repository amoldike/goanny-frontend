import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import CustomButton from "../../basic-ui-components/CustomButton";
import validators from "../../helpers/validators";
import "./index.module.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [isInvalidFirstName, setIsInvalidFirstName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isInvalidLastName, setIsInvalidLastName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isValidMobile, setIsValidMobile] = useState(false);
  const [isInvalidMobile, setIsInvalidMobile] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
  const [isInvalidConfirmPassword, setIsInvalidConfirmPassword] =
    useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fname: firstName,
      lname: lastName,
      email: email,
      mobile: mobileNumber,
      password: password,
    };
    axios
      .post("http://localhost:5000/users", data)
      .then((res) => {
        console.log(res);
        navigate("../home");
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h2>Create Your Account</h2>
      <Form method="post" onSubmit={handleSubmit}>
        <FormGroup row>
          <Col md={6} className="mb-3">
            <Label>First Name</Label>
            <Input
              name="firstName"
              placeholder="Enter your first name"
              type="text"
              required={true}
              valid={isValidFirstName}
              invalid={isInvalidFirstName}
              onChange={(e) => {
                const res = validators(e.target.value, "string");
                setIsValidFirstName(res);
                setIsInvalidFirstName(!res);
                setFirstName(e.target.value);
              }}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label>Last Name</Label>
            <Input
              name="lastName"
              placeholder="Enter your last name"
              type="text"
              required={true}
              valid={isValidLastName}
              invalid={isInvalidLastName}
              onChange={(e) => {
                const res = validators(e.target.value, "string");
                setIsValidLastName(res);
                setIsInvalidLastName(!res);
                setLastName(e.target.value);
              }}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label>Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your email address"
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
          </Col>
          <Col md={6} className="mb-3">
            <Label for="examplePassword">Mobile Number</Label>
            <Input
              id="examplePassword"
              placeholder="Enter your mobile number"
              type="number"
              required={true}
              valid={isValidMobile}
              invalid={isInvalidMobile}
              onChange={(e) => {
                const res = validators(e.target.value, "mobile");
                setIsValidMobile(res);
                setIsInvalidMobile(!res);
                setMobileNumber(e.target.value);
              }}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              placeholder="Enter your password"
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
          </Col>
          <Col md={6} className="mb-3">
            <Label for="examplePassword">Confirm Password</Label>
            <Input
              id="examplePassword"
              placeholder="Enter confirm password"
              type="password"
              required={true}
              valid={isValidConfirmPassword}
              invalid={isInvalidConfirmPassword}
              onChange={(e) => {
                const res = validators(
                  e.target.value,
                  "confirmPassword",
                  password
                );
                setIsValidConfirmPassword(res);
                setIsInvalidConfirmPassword(!res);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" required />I agree to the&nbsp;
            <Link to="/">terms & conditions.</Link>
          </Label>
        </FormGroup>
        <CustomButton btnText="Create My Profile" />
        <FormGroup className="mt-2">
          <p>
            Already a member? <Link to="/login">Sign In </Link> Here!
          </p>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RegistrationForm;
