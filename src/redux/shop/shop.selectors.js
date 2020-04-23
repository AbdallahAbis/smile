import { createSelector } from "reselect";

export const selectShop = state => state.shop.products;

export const selectAllProducts = createSelector(
  [selectShop],
  products => products.allProducts
);
export const selectAllProductsAsArray = createSelector(
  [selectAllProducts],
  products => (products ? Object.keys(products).map(key => products[key]) : [])
);

export const selectFeaturedProducts = createSelector(
  [selectShop],
  products => products.featuredProducts
);

export const selectNewProducts = createSelector([selectShop], products =>
  products.newProducts
);
