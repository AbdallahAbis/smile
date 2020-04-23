import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";
import GoogleAndFacebook from "../../components/googleAndFacebook/googleAndFacebook.component";

import { Container } from "./signupPage.styles";

const SignUpPage = () => {
  return (
    <Container>
      <SignUp />
      <GoogleAndFacebook />
    </Container>
  );
};

export default SignUpPage;
