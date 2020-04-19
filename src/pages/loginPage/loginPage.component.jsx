import React from "react";

import {
  Container,
  EmailAndPasswordContainer,
  FacebookAndGoogleContainer,
  Paragraph,
  InputField,
  Button,
  Social,
  Question,
  Anchor,
} from "./loginPage.styles";

const LoginPage = () => {
  return (
    <Container>
      <EmailAndPasswordContainer>
        <Paragraph>Log in using your email and password!</Paragraph>
        <form>
          <InputField label="Email:" type="text" autoComplete="username" />
          <InputField
            label="Password:"
            type="password"
            autoComplete="current-password"
          />
          <Button>LOG IN</Button>
        </form>
        <Question>
          You don't have an account? <Anchor to="/sign-up">Sign Up</Anchor>
        </Question>
      </EmailAndPasswordContainer>
      <FacebookAndGoogleContainer>
        <Paragraph>Log in using Facebook or Google!</Paragraph>
        <Social type="facebook">LOG IN USING FACEBOOK</Social>
        <Social type="google">LOG IN USING GOOGLE</Social>
      </FacebookAndGoogleContainer>
    </Container>
  );
};

export default LoginPage;
