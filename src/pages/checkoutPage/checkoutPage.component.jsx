import React from "react";

import { FEATURED } from "../../redux/shop-data/shop-data";

import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import CheckoutPreview from "../../components/checkout-preview/checkout-preview.component";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  Container,
  TotalContainer,
  TotalAndPayContainer,
  TotalText,
  TotalNumber,
  PayButton,
} from "./checkoutPage.styles";

const CheckoutPage = () => {
  return (
    <React.Fragment>
      <CartDropdown items={FEATURED} />
      <Container>
        <CheckoutTable />
        <CheckoutPreview items={FEATURED} />
        <TotalAndPayContainer>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalNumber>$2327</TotalNumber>
          </TotalContainer>
          <PayButton>PAY NOW</PayButton>
        </TotalAndPayContainer>
      </Container>
    </React.Fragment>
  );
};

export default CheckoutPage;
