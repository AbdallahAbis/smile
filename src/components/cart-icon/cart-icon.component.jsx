import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectNumberOfAddedItems } from "../../redux/cart/cart.selectors";

import { Cart, CartContainer, AddedItems } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, selectNumberOfAddedItems }) => (
  <CartContainer to="#" onClick={toggleCartHidden}>
    <Cart />
    <AddedItems>{selectNumberOfAddedItems}</AddedItems>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  selectNumberOfAddedItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
