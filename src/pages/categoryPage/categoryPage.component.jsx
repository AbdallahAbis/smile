import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAllProducts } from "../../redux/shop/shop.selectors";

import { Container } from "./categoryPage.styles";
import ProductsOverview from "../../components/products-overview/products-overview.component";

const CategoryPage = ({ match: { params }, allProducts }) => {
  const { categoryName } = params;

  return (
    <Container>
      <ProductsOverview
        title={categoryName.toUpperCase()}
        items={allProducts[categoryName].items}
      />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  allProducts: selectAllProducts,
});
export default connect(mapStateToProps)(CategoryPage);
