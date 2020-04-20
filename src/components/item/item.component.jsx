import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  ItemContainer,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Price,
  Button,
} from "./item.styles";

const Item = ({ item, addItem }) => {
  return (
    <ItemContainer key={item.id}>
      <ImageContainer>
        <Image src={item.imageUrl} alt={item.name}></Image>
      </ImageContainer>
      <TextContainer>
        <Title>{item.name}</Title>
        <Price>${item.price}</Price>
      </TextContainer>
      <Button to="#" type="button" onClick={() => addItem(item)}>
        Add To Cart
      </Button>
    </ItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Item);
