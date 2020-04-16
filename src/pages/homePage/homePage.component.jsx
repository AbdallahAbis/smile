import React from "react";

import HeroHomePage from "../../components/hero-homePage/hero-homePage.component";
import HeroStore from "../../components/hero-store/hero-store.component";
import FeaturedSection from "../../components/featured-section/featured-section.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";
import Footer from "../../components/footer/footer.component";

import { Button } from "./homePage.styles";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroHomePage />
      <FeaturedSection />
      <CategoriesSection />
      <HeroStore />
      <Button>Check All Products</Button>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
