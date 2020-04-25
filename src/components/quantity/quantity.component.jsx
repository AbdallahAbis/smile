import React from "react";
import { connect } from "react-redux";

import { addItem, removeItem } from "../../redux/cart/cart.actions";

import { Container, Button, Number } from "./quantity.styles";

const Quantity = ({ number, item, addItem, removeItem, ...props }) => {
  console.log(item);

  let classNames = "";

  if (item.quantity === 1) {
    classNames = "disabled";
  }

  return (
    <Container {...props}>
      <Button
        className={classNames}
        reversed="true"
        onClick={() => removeItem(item)}
      >
        -
      </Button>
      <Number>{!item.quantity ? 0 : item.quantity}</Number>
      <Button reversed="true" onClick={() => addItem(item)}>
        +
      </Button>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(Quantity);
