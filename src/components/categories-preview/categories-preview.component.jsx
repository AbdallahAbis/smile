import React from "react";

import {
  Container,
  ItemContainer,
  ImageContainer,
  Image,
  Button,
} from "./categories-preview.styles";

const Categories = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <ImageContainer>
            <Image src={item.imageUrl} alt={item.name} />
          </ImageContainer>
          <Button>{item.name}</Button>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default Categories;
