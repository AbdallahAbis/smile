import React from "react";

import ProductsPreview from "../products-preview/products-preview.component";
import Categories from "../categories-preview/categories-preview.component";

import { Container, MainTitle } from "./products-overview.styles";

const ProductsOverview = ({ title, type, ...props }) => {

  return (
    <Container>
      {title.toLowerCase() !== "categories" ? (
        <MainTitle>{title}</MainTitle>
      ) : null}

      {type === "categories" ? (
        <Categories {...props} />
      ) : (
        <ProductsPreview {...props} />
      )}
    </Container>
  );
};

export default ProductsOverview;
