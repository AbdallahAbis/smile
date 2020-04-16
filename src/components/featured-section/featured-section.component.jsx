import React from "react";

import { FEATURED } from "../../redux/shop-data/shop-data";

import ProductsOverview from "../products-overview/products-overview.component";

const FeaturedSection = () => (
  <ProductsOverview title="Featured Products" items={FEATURED} />
);
export default FeaturedSection;
