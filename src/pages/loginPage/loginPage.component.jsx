import React, { useState } from "react";
import { connect } from "react-redux";

import { emailSignInStart } from "../../redux/user/user.actions";

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
} from "./loginPage.styles";

const LoginPage = ({ emailSignInStart }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userInfo;

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Container>
      <EmailAndPasswordContainer>
        <Paragraph>Log in using your email and password!</Paragraph>
        <form>
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
            autoComplete="current-password"
          />
          <Button to="#" onClick={handleSubmit}>
            LOG IN
          </Button>
        </form>
        <Question>
          You don't have an account? <Anchor to="/sign-up">Sign Up</Anchor>
        </Question>
      </EmailAndPasswordContainer>
      <FacebookAndGoogleContainer>
        <Paragraph>Log in using Facebook or Google!</Paragraph>
        <GoogleAndFacebook />
      </FacebookAndGoogleContainer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(LoginPage);
