import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectAllProductsAsArray
} from "../../redux/shop/shop.selectors";

import ProductsOverview from "../products-overview/products-overview.component";

const CategoriesSection = ({ products }) => {
  return (
    <ProductsOverview type="categories" title="Categories" items={products} />
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectAllProductsAsArray
});

export default connect(mapStateToProps)(CategoriesSection);
