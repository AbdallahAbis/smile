import React from "react";

import Quantity from "../quantity/quantity.component";

import {
  Container,
  Image,
  Name,
  Price,
  Button,
} from "./checkout-preview.styles";

const CheckoutPreview = ({ items }) => {
  return items.map((item) => (
    <Container>
      <Image src={item.imageUrl} />
      <Name>{item.name}</Name>
      <Quantity number="2" />
      <Price>${item.price}</Price>
      <Button reversed="true">remove</Button>
    </Container>
  ));
};

export default CheckoutPreview;
