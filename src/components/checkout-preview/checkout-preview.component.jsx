import React from "react";
import { connect } from "react-redux";

import Quantity from "../quantity/quantity.component";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

import {
  Container,
  Image,
  Name,
  Price,
  Button
} from "./checkout-preview.styles";

const CheckoutPreview = ({ items, temTotalPrice, clearItem }) => {
  return items.map(item => (
    <Container key={item.id}>
      <Image src={item.imageUrl} />
      <Name>{item.name}</Name>
      <Quantity number={item.quantity} item={item} />
      <Price>${item.quantity * item.price}</Price>
      <Button reversed="true" onClick={() => clearItem(item)}>
        remove
      </Button>
    </Container>
  ));
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutPreview);
