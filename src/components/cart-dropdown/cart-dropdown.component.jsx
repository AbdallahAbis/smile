import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectToggleHidden
} from "../../redux/cart/cart.selectors";

import {
  clearItemFromCart,
  toggleCartHidden
} from "../../redux/cart/cart.actions";

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
  Empty
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, clearItem, toggleHidden, isHidden }) => (
  <Container className={!isHidden}>
    <ItemsContainer>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <ItemContainer key={item.id}>
              <Image src={item.imageUrl} alt={item.name} />
              <Name>{item.name}</Name>
              <Quantity>x {item.quantity}</Quantity>
              <RemoveIcon
                onClick={() => clearItem(item)}
                src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"
              />
              <Price>${item.quantity * item.price}</Price>
            </ItemContainer>
          ))}
        </>
      ) : (
        <Empty>Your cart is empty!</Empty>
      )}
    </ItemsContainer>
    <Button link="true" to="/checkout" onClick={toggleHidden}>
      GO TO CHECKOUT
    </Button>
  </Container>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  isHidden: selectToggleHidden
});

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  toggleHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
