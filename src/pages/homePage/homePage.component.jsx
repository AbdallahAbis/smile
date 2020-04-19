import React from "react";

import { FEATURED } from "../../redux/shop-data/shop-data";

import HeroHomePage from "../../components/hero-homePage/hero-homePage.component";
import ProductsOverview from "../../components/products-overview/products-overview.component";
import HeroStore from "../../components/hero-store/hero-store.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";

import { Container, ButtonContainer, Button } from "./homePage.styles";

const HomePage = () => {
  return (
    <Container>
      <HeroHomePage />
      <ProductsOverview title="Featured Products" items={FEATURED} />
      <CategoriesSection />
      <HeroStore size="90vh" position="center" />
      <ButtonContainer>
        <Button to="/store" >
          Check All Products
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
