import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { PayButton } from "./stripe-button.styles";

const StripeButton = ({ price, classNames }) => {
  const priceInCents = price * 100;
  const key = "pk_test_Ki3qdUzc5dQepQpZwtnTcdET00gIBqX9Me";

  const onToken = token => {
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="PAY NOW"
      image="https://i.ibb.co/HC6nqqt/logo512.png"
      name="Wear and Smile"
      shippingAddress
      amount={priceInCents}
      stripeKey={key}
      token={onToken}
      ComponentClass="div"
    >
      <PayButton className={classNames}>PAY NOW</PayButton>
    </StripeCheckout>
  );
};

export default StripeButton;
