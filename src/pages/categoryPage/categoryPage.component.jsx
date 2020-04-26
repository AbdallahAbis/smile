import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAllProducts } from "../../redux/shop/shop.selectors";

import { Container } from "./categoryPage.styles";
import ProductsOverview from "../../components/products-overview/products-overview.component";

const CategoryPage = ({ match: { params }, allProducts }) => {
  const { categoryName } = params;
  const category = allProducts[categoryName];
  return (
    <Container>
      {!category ? (
        <Redirect to="/not-found" />
      ) : (
        <ProductsOverview
          title={categoryName.toUpperCase()}
          items={category.items}
        />
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  allProducts: selectAllProducts
});
export default connect(mapStateToProps)(CategoryPage);
