import React from "react";

import LogIn from "../../components/log-in/log-in.component";
import GoogleAndFacebook from "../../components/googleAndFacebook/googleAndFacebook.component";

import { Container } from "./loginPage.styles";

const LoginPage = () => (
  <>
    <Container>
      <LogIn />
      <GoogleAndFacebook />
    </Container>
  </>
);

export default LoginPage;
