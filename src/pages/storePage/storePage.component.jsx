import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectNewProducts } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import HeroStore from "../../components/hero-store/hero-store.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";
import ProductsOverview from "../../components/products-overview/products-overview.component";

const StorePage = ({ newProducts, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <React.Fragment>
      <HeroStore size="100vh" position="top" />
      <CategoriesSection />
      <ProductsOverview title="New Products" items={newProducts} />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  newProducts: selectNewProducts
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
