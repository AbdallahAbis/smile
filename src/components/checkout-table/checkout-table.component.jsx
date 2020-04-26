import React from "react";

import {
  TableHeaderContainer,
  TableHeaderTitle
} from "./checkout-table.styles";

const CheckoutTable = () => (
  <TableHeaderContainer>
    <TableHeaderTitle>Image</TableHeaderTitle>
    <TableHeaderTitle>Name</TableHeaderTitle>
    <TableHeaderTitle>Quantity</TableHeaderTitle>
    <TableHeaderTitle>Price</TableHeaderTitle>
    <TableHeaderTitle></TableHeaderTitle>
  </TableHeaderContainer>
);

export default CheckoutTable;
