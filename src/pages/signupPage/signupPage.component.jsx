import React from "react";

import {
  Container,
  EmailAndPasswordContainer,
  FacebookAndGoogleContainer,
  Paragraph,
  InputField,
  Button,
  Question,
  Social,
  Anchor,
} from "./signupPage.styles";

const SignUpPage = () => {
  return (
    <Container>
      <EmailAndPasswordContainer>
        <Paragraph>Sign up using your email and password!</Paragraph>
        <form>
          <InputField label="First Name:" type="text" />
          <InputField label="Last Name:" type="text" />
          <InputField label="Email:" type="text" autoComplete="username" />
          <InputField
            label="Password:"
            type="password"
            autoComplete="new-password"
          />
          <InputField
            label="Confirm Password:"
            type="password"
            autoComplete="new-password"
          />
          <Button to='#'>SIGN UP</Button>
        </form>
        <Question>
          You already have an account? <Anchor to="/log-in">Log In</Anchor>
        </Question>
      </EmailAndPasswordContainer>
      <FacebookAndGoogleContainer>
        <Paragraph>Sign up using Facebook or Google!</Paragraph>
        <Social type="facebook">SIGN UP USING FACEBOOK</Social>
        <Social type="google">SIGN UP USING GOOGLE</Social>
      </FacebookAndGoogleContainer>
    </Container>
  );
};

export default SignUpPage;
