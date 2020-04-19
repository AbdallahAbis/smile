import React from "react";

import Quantity from "../quantity/quantity.component";

import {
  ProductHeroContainer,
  Title,
  Detail,
  ImagesContainer,
  PrimaryImage,
  SecondaryImage,
  AllDetailsContainer,
  DetailsInTextContainer,
  TotalContainer,
  TotalText,
  TotalNumber,
  ButtonsContainer,
  Button,
} from "./singleProductDetails.styles";

const SingleProductDetails = ({ item }) => {
  return (
    <ProductHeroContainer>
      <Detail>Categories/Women/Short Skirt</Detail>
      <Title>Short Skirt</Title>
      <ImagesContainer>
        <PrimaryImage area="p" src={item.imageUrl} alt={item.name} />
        <SecondaryImage area="s" src={item.imageUrl} alt={item.name} />
        <SecondaryImage area="t" src={item.imageUrl} alt={item.name} />
        <SecondaryImage area="q" src={item.imageUrl} alt={item.name} />
      </ImagesContainer>
      <AllDetailsContainer>
        <DetailsInTextContainer>
          <Detail>Color: Unknown.</Detail>
          <Detail>Size: Unknown.</Detail>
          <Detail>Manufacture: Unknown.</Detail>
          <Detail>Shipping From: Unknown.</Detail>
        </DetailsInTextContainer>
        <Quantity number="3" />
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalNumber>$14076</TotalNumber>
        </TotalContainer>
        <ButtonsContainer>
          <Button>ADD TO CART</Button>
          <Button reversed="true">PROCEED TO CHECKOUT</Button>
        </ButtonsContainer>
      </AllDetailsContainer>
    </ProductHeroContainer>
  );
};

export default SingleProductDetails;
