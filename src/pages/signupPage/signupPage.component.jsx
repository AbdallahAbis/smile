import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import GoogleAndFacebook from "../../components/googleAndFacebook/googleAndFacebook.component";

import {
  Container,
  EmailAndPasswordContainer,
  FacebookAndGoogleContainer,
  Paragraph,
  InputField,
  Button,
  Question,
  Anchor
} from "./signupPage.styles";

const SignUpPage = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userInfo;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("passwords don't match");
    console.log(password, confirmPassword);
    signUpStart(email, password, displayName);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
    console.log({ [name]: value });
  };

  return (
    <Container>
      <EmailAndPasswordContainer>
        <Paragraph>Sign up using your email and password!</Paragraph>
        <form>
          <InputField
            label="Full Name:"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            type="text"
          />
          <InputField
            label="Email:"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="username"
          />
          <InputField
            label="Password:"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <InputField
            label="Confirm Password:"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <Button to="#" onClick={handleSubmit}>
            SIGN UP
          </Button>
        </form>
        <Question>
          You already have an account? <Anchor to="/log-in">Log In</Anchor>
        </Question>
      </EmailAndPasswordContainer>
      <FacebookAndGoogleContainer>
        <Paragraph>Sign up using Facebook or Google!</Paragraph>
        <GoogleAndFacebook />
      </FacebookAndGoogleContainer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUpPage);
