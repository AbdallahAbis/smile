import React from "react";

import { NEW_PRODUCTS } from "../../redux/shop-data/shop-data";

import HeroStore from "../../components/hero-store/hero-store.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";
import ProductsOverview from "../../components/products-overview/products-overview.component";

const StorePage = () => (
  <React.Fragment>
    <HeroStore size="100vh" position="top" />
    <CategoriesSection />
  <ProductsOverview title="New Products" items={NEW_PRODUCTS} />
  </React.Fragment>
);
export default StorePage;
