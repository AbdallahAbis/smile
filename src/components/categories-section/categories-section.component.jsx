import React from "react";

import { COVER_IMAGES } from "../../redux/shop-data/shop-data";

import ProductsOverview from "../products-overview/products-overview.component";

const CategoriesSection = () => {

  return (
    <ProductsOverview
      type="categories"
      title="Categories"
      items={COVER_IMAGES}
    />
  );
};

export default CategoriesSection;
