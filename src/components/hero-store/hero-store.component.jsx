import React from "react";

import BackgroundImage from "../../assets/hero/hero-red.png";

import { Container, Title, Text } from "./hero-store.styles";

const HeroStore = ({ ...props }) => (
    <Container {...props} background={BackgroundImage}>
      <Title>
        We Offer 15 Days <br /> Money Back <br /> Guaranteed!
      </Title>
      <Text>& We Ship All Over Morocco!</Text>
    </Container>
  );


export default HeroStore;
