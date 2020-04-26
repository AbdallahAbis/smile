import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleMenuHidden } from "../../redux/cart/cart.actions";
import { selectToggleMenu } from "../../redux/cart/cart.selectors";

import { Container, MenuBars } from "./hamburger-menu.styles";

const Menu = ({ toggleMenu, isClosed }) => (
  <Container onClick={toggleMenu} className={!isClosed}>
    <MenuBars></MenuBars>
  </Container>
);

const mapStateToProps = createStructuredSelector({
  isClosed: selectToggleMenu
});
const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenuHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
