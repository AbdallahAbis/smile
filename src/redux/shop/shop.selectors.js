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
export const selectAllProductsAtOnce = createSelector(
  [selectAllProductsAsArray],
  products => {
    let array = [];

    const items = products.map(category => category.items);

    for (let i = 0, len = items.length; i < len; i++) {
      for (let j = 0, len2 = items[i].length; j < len2; j++) {
        array.push(items[i][j]);
      }
    }
    return array;
  }
);

export const selectFeaturedProducts = createSelector(
  [selectShop],
  products => products.featuredProducts
);

export const selectNewProducts = createSelector(
  [selectShop],
  products => products.newProducts
);
