import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectAllProducts = createSelector(
  [selectShop],
  (shop) => shop.products.allProducts
);

export const selectFeaturedProducts = createSelector(
  [selectShop],
  (shop) => shop.products.featuredProducts
);

export const selectCategories = createSelector(
  [selectShop],
  (shop) => shop.products.categories
);

export const selectNewProducts = createSelector(
  [selectShop],
  (shop) => shop.products.newProducts
);
