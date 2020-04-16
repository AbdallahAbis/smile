import React from "react";

import { Cart, CartContainer, AddedItems } from "./cart-icon.styles";

const CartIcon = () => (
  <CartContainer>
    <Cart />
    <AddedItems>0</AddedItems>
  </CartContainer>
);

export default CartIcon;
