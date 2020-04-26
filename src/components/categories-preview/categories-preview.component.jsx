import React from "react";

import {
  Container,
  ItemContainer,
  Image,
  Button
} from "./categories-preview.styles";

const Categories = ({ items }) => (
  <Container>
    {items.map(item => (
      <ItemContainer key={item.id}>
        <>
          <Image src={item.imageUrl} alt={item.title} />
        </>
        <Button link="true" to={`/store/${item.title.toLowerCase()}`}>
          {item.title.toUpperCase()}
        </Button>
      </ItemContainer>
    ))}
  </Container>
);

export default Categories;
