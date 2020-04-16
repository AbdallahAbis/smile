import React from "react";

import {
  ItemContainer,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Price,
  Button,
} from "./item.styles";

const Item = ({ item }) => (
  <ItemContainer key={item.id}>
    <ImageContainer>
      <Image src={item.imageUrl} alt={item.name}></Image>
    </ImageContainer>
    <TextContainer>
      <Title>{item.name}</Title>
      <Price>${item.price}</Price>
    </TextContainer>
    <Button type="button">Add To Cart</Button>
  </ItemContainer>
);

export default Item;
