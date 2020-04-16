import React from "react";

import Logo from "../logo/logo.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { Container, OptionsContainer, Option } from "./header.styles";

const Header = () => {
  return (
    <Container color="white">
      <Logo color="white" />
      <OptionsContainer>
        <Option>Categories</Option>
        <Option>Store</Option>
        <Option>Contact</Option>
        <Option>Log in</Option>
        <CartIcon />
      </OptionsContainer>
    </Container>
  );
};

export default Header;
