import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectFeaturedProducts } from "../../redux/shop/shop.selectors";

import HeroHomePage from "../../components/hero-homePage/hero-homePage.component";
import ProductsOverview from "../../components/products-overview/products-overview.component";
import HeroStore from "../../components/hero-store/hero-store.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";

import { Container, ButtonContainer, Button } from "./homePage.styles";

const HomePage = ({ featured }) => {
  return (
    <Container>
      <HeroHomePage />
      <ProductsOverview title="Featured Products" items={featured} />
      <CategoriesSection />
      <HeroStore size="90vh" position="center" />
      <ButtonContainer>
        <Button to="/store">Check All Products</Button>
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  featured: selectFeaturedProducts,
});

export default connect(mapStateToProps)(HomePage);
