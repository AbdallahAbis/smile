import React from "react";

import {
  Container,
  ItemsContainer,
  ItemContainer,
  Image,
  Name,
  Price,
  Quantity,
  RemoveIcon,
  Button,
} from "./cart-dropdown.styles";

const CartDropdown = ({ items }) => {
  return (
    <Container>
      <ItemsContainer>
        {items.map((item) => (
          <ItemContainer>
            <Image src={item.imageUrl} alt={item.name} />
            <Name>{item.name}</Name>
            <Quantity>x {item.id}</Quantity>
            <RemoveIcon src="https://img.icons8.com/flat_round/64/000000/delete-sign.png" />
            <Price>${item.price}</Price>
          </ItemContainer>
        ))}
      </ItemsContainer>
      <Button>GO TO CHECKOUT</Button>
    </Container>
  );
};

export default CartDropdown;
