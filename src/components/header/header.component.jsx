import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectToggleHidden,
  selectToggleMenu,
  selectCartItems
} from "../../redux/cart/cart.selectors";
import { toggleMenuHidden } from "../../redux/cart/cart.actions";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

import Logo from "../logo/logo.component";
import CartIcon from "../cart-icon/cart-icon.component";
import Menu from "../hamburger-menu/hamburger-menu.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { Container, OptionsContainer, Option } from "./header.styles";

const Header = ({
  location,
  isHidden,
  isClosed,
  currentUser,
  signOutStart,
  cartItems,
  toggleMenu
}) => {
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
        <OptionsContainer
          color={color}
          className={`${!isClosed ? "true" : ""}`}
        >
          <Option to="/store" onClick={toggleMenu}>
            Store
          </Option>
          <Option to="/contact" onClick={toggleMenu}>
            Contact
          </Option>
          {!currentUser ? (
            <Option to="/log-in" onClick={toggleMenu}>
              Log in
            </Option>
          ) : (
            <Option
              exact
              to="/"
              onClick={() => signOutStart(currentUser, cartItems)}
            >
              Sign out
            </Option>
          )}
        </OptionsContainer>
        <CartIcon />
        <Menu />
        <CartDropdown />
        {/* {!isHidden ? <CartDropdown /> : null} */}
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  isHidden: selectToggleHidden,
  isClosed: selectToggleMenu,
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  signOutStart: (currentUser, selectCartItems) =>
    dispatch(signOutStart(currentUser, selectCartItems)),
  toggleMenu: () => dispatch(toggleMenuHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
