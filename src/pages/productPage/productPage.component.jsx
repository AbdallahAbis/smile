import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectFeaturedProducts,
  selectAllProductsAtOnce
} from "../../redux/shop/shop.selectors";

import SingleProductDetails from "../../components/singleProductDetails/singleProductDetails.component";

import {
  Container,
  Title,
  ButtonContainer,
  RelatedProducts,
  Button,
  DescriptionContainer,
  DescriptionParagraph,
  RelatedTitle
} from "./productPage.styles";

const ProductPage = ({ featured, allProducts, location, match }) => {
  const item = allProducts.filter(product => product.id === match.params.id);

  return (
    <Container>
      <SingleProductDetails item={item[0]} />
      <DescriptionContainer>
        <Title className="description">Description</Title>
        <DescriptionParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
          praesent elementum facilisis leo. Faucibus interdum posuere lorem
          ipsum dolor sit amet consectetur. Accumsan tortor posuere ac ut
          consequat semper. Egestas pretium aenean pharetra magna. Id semper
          risus in hendrerit gravida rutrum quisque non tellus. Mattis vulputate
          enim nulla aliquet. Velit laoreet id donec ultrices tincidunt arcu non
          sodales neque. Arcu vitae elementum curabitur vitae nunc sed velit
          dignissim sodales. Egestas integer eget aliquet nibh praesent
          tristique magna. Et ligula ullamcorper malesuada proin libero. Magna
          ac placerat vestibulum lectus mauris ultrices eros in cursus. In nisl
          nisi scelerisque eu ultrices vitae auctor eu. Eu scelerisque felis
          imperdiet proin fermentum leo vel orci. Eleifend donec pretium
          vulputate sapien nec. Pharetra vel turpis nunc eget. Porttitor leo a
          diam sollicitudin tempor id eu. Odio ut sem nulla pharetra diam sit
          amet nisl suscipit. Laoreet id donec ultrices tincidunt arcu non
          sodales neque sodales.
        </DescriptionParagraph>
      </DescriptionContainer>
      <RelatedTitle>RELATED PRODUCTS</RelatedTitle>
      <RelatedProducts items={featured.filter((item, ind) => ind < 4)} />
      <ButtonContainer>
        <Button link="true" to="/store">
          Check All Products
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  featured: selectFeaturedProducts,
  allProducts: selectAllProductsAtOnce
});

export default connect(mapStateToProps)(ProductPage);
