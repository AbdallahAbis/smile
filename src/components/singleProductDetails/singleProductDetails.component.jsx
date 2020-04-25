import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import {
  ProductHeroContainer,
  Title,
  Detail,
  ImagesContainer,
  PrimaryImage,
  SecondaryImage,
  AllDetailsContainer,
  DetailsInTextContainer,
  TotalContainer,
  TotalText,
  TotalNumber,
  ButtonsContainer,
  Button,
  ProductQuantity
} from "./singleProductDetails.styles";

const SingleProductDetails = ({ item, cartItems }) => {
  const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
  let currentItem = item;
  if (itemInCart && itemInCart.quantity) currentItem = itemInCart;
  console.log(currentItem);

  return (
    <ProductHeroContainer>
      <Title>{currentItem.name}</Title>
      <ImagesContainer>
        <PrimaryImage
          area="p"
          src={currentItem.imageUrl}
          alt={currentItem.name}
        />
        <SecondaryImage
          area="s"
          src={currentItem.imageUrl}
          alt={currentItem.name}
        />
        <SecondaryImage
          area="t"
          src={currentItem.imageUrl}
          alt={currentItem.name}
        />
        <SecondaryImage
          area="q"
          src={currentItem.imageUrl}
          alt={currentItem.name}
        />
      </ImagesContainer>
      <AllDetailsContainer>
        <DetailsInTextContainer>
          <Detail>Color: Unknown.</Detail>
          <Detail>Size: Unknown.</Detail>
          <Detail>Manufacture: Unknown.</Detail>
          <Detail>Shipping From: Unknown.</Detail>
        </DetailsInTextContainer>
        <ProductQuantity item={currentItem} />
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalNumber>
            $
            {currentItem.quantity
              ? currentItem.price * currentItem.quantity
              : currentItem.price}
          </TotalNumber>
        </TotalContainer>
        <ButtonsContainer>
          <Button>ADD TO CART</Button>
          <Button reversed="true">PROCEED TO CHECKOUT</Button>
        </ButtonsContainer>
      </AllDetailsContainer>
    </ProductHeroContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(SingleProductDetails);
