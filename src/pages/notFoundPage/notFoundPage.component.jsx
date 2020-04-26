import React from "react";

import {
  Container,
  SubTitle,
  Text,
  SVG,
  Anchor
} from "./notFoundPage.styles";

const NotFoundPage = () => (
  <Container>
    <SVG />
    <SubTitle>PAGE NOT FOUND</SubTitle>
    <Text>
      Go back to <Anchor to="/"> Home Page</Anchor>
    </Text>
  </Container>
);

export default NotFoundPage;
