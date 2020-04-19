import React from "react";

import Logo from "../logo/logo.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { Container, OptionsContainer, Option } from "./header.styles";

const Header = ({ location }) => {
  let color = "";
  location.pathname === "/" ? (color = "white") : (color = "black");

  return (
    <Container color={color}>
      <Logo color={color} />
      <OptionsContainer>
        <Option exact to="/">
          Home
        </Option>
        <Option to="/store">Store</Option>
        <Option to="/contact">Contact</Option>
        <Option to="/log-in">Log in</Option>
        <CartIcon />
      </OptionsContainer>
    </Container>
  );
};

export default Header;
