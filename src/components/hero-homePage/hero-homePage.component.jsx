import React from "react";

import BackgroundImage from "../../assets/hero/hero-black.jpg";

import CustomButton from "../custom-button/custom-button.component";

import {
  Background,
  Container,
  Title,
  Slogan,
  Paragraph
} from "./hero-homePage.styles";

const HeroHomePage = () => (
  <Container>
    <Background background={BackgroundImage} />
    <Title>Wear and Smile</Title>
    <Slogan>Shop today, Smile forever!</Slogan>
    <Paragraph>
      We are not just an online shop anymore, We took it a step further and now
      Wear and smile has also a local shop in Agadir, Morocco!
    </Paragraph>
    <CustomButton to="#" type="button">
      Learn More!
    </CustomButton>
  </Container>
);

export default HeroHomePage;
