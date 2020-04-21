import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectToggleHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

import Logo from "../logo/logo.component";
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { Container, OptionsContainer, Option } from "./header.styles";

const Header = ({ location, isHidden, currentUser, signOutStart }) => {
  let color = "";
  let background = "";

  location.pathname === "/" ? (color = "white") : (color = "black");

  location.pathname === "/store"
    ? (background = "lightGrey")
    : location.pathname === "/"
    ? (background = "black")
    : (background = "white");

  return (
    <React.Fragment>
      <Container color={color} background={background}>
        <Logo color={color} />
        <OptionsContainer>
          <Option exact to="/">
            Home
          </Option>
          <Option to="/store">Store</Option>
          <Option to="/contact">Contact</Option>
          {!currentUser ? (
            <Option to="/log-in">Log in</Option>
          ) : (
            <Option to="/" onClick={signOutStart}>
              Sign out
            </Option>
          )}

          <CartIcon />
        </OptionsContainer>
        {!isHidden ? <CartDropdown /> : null}
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  isHidden: selectToggleHidden,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
