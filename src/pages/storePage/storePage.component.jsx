import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectFeaturedProducts } from "../../redux/shop/shop.selectors";

import HeroStore from "../../components/hero-store/hero-store.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";
import ProductsOverview from "../../components/products-overview/products-overview.component";

const StorePage = ({ newProducts }) => (
  <React.Fragment>
    <HeroStore size="100vh" position="top" />
    <CategoriesSection />
    <ProductsOverview title="New Products" items={newProducts} />
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  newProducts: selectFeaturedProducts,
});
export default connect(mapStateToProps)(StorePage);
