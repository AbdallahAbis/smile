import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selectors";

import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import CheckoutPreview from "../../components/checkout-preview/checkout-preview.component";

import {
  Container,
  TotalContainer,
  TotalAndPayContainer,
  TotalText,
  TotalNumber,
  PayButton,
} from "./checkoutPage.styles";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <React.Fragment>
      <Container>
        <CheckoutTable />
        <CheckoutPreview items={cartItems} />
        <TotalAndPayContainer>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalNumber>${totalPrice}</TotalNumber>
          </TotalContainer>
          <PayButton to="#">PAY NOW</PayButton>
        </TotalAndPayContainer>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
