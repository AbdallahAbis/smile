import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import CheckoutPreview from "../../components/checkout-preview/checkout-preview.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
  Container,
  TotalContainer,
  TotalAndPayContainer,
  TotalText,
  TotalNumber,
  Empty
} from "./checkoutPage.styles";

const CheckoutPage = ({ cartItems, totalPrice, CurrentUser }) => {
  const classNames = cartItems.length === 0 ? "disabled" : "";

  return (
    <>
      <Container>
        {cartItems.length === 0 ? (
          <Empty>YOUR CART IS EMPTY!</Empty>
        ) : (
          <>
            <CheckoutTable />
            <CheckoutPreview items={cartItems} />
          </>
        )}

        <TotalAndPayContainer>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalNumber>${totalPrice}</TotalNumber>
          </TotalContainer>
          <StripeButton classNames={classNames} />
        </TotalAndPayContainer>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
  CurrentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CheckoutPage);
