import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";
import GoogleAndFacebook from "../../components/googleAndFacebook/googleAndFacebook.component";

import { Container } from "./signupPage.styles";

const SignUpPage = () => (
  <Container>
    <SignUp />
    <GoogleAndFacebook />
  </Container>
);

export default SignUpPage;
