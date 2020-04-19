import React from "react";

import SHOP_DATA from "../../redux/shop-data/shop-data";

import { Container } from "./categoryPage.styles";
import ProductsOverview from "../../components/products-overview/products-overview.component";

const CategoryPage = ({ match: { params } }) => {
  const { categoryName } = params;

  return (
    <Container>
      <ProductsOverview
        title={categoryName.toUpperCase()}
        items={SHOP_DATA[categoryName].items}
      />
    </Container>
  );
};

export default CategoryPage;
