import React from "react";

import { Container, Button, Number } from "./quantity.styles";

const Quantity = ({ number, ...props }) => {
  return (
    <Container {...props}>
      <Button reversed="true">+</Button>
      <Number>{number}</Number>
      <Button reversed="true">-</Button>
    </Container>
  );
};

export default Quantity;
