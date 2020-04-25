import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleMenuHidden } from "../../redux/cart/cart.actions";
import { selectToggleMenu } from "../../redux/cart/cart.selectors";

import "./hamburger-menu.styles.scss";
const Menu = ({ toggleMenu, isClosed }) => {
  const changeValues = () => {
    toggleMenu();
  };
  return (
    <div onClick={changeValues} className={`container ${!isClosed}`}>
      <div className="menu"></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isClosed: selectToggleMenu
});
const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenuHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
