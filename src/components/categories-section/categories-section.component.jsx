import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategories } from "../../redux/shop/shop.selectors";

import ProductsOverview from "../products-overview/products-overview.component";

const CategoriesSection = ({ categories }) => {

  return (
    <ProductsOverview type="categories" title="Categories" items={categories} />
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps)(CategoriesSection);
