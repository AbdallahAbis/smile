import React from "react";

import Item from "../item/item.component";

import { ProductContainer } from "./products-preview.styles";

const ProductsPreview = ({ items }) => (
  <ProductContainer>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </ProductContainer>
);

export default ProductsPreview;
