import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectToggleHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);
export const selectToggleMenu = createSelector(
  [selectCart],
  cart => cart.isClosed
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectSingleItemTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.map(cartItem => cartItem.quantity * cartItem.price)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (start, cartItem) => start + cartItem.quantity * cartItem.price,
      0
    )
);
export const selectNumberOfAddedItems = createSelector(
  [selectCartItems],
  cartItems => cartItems.length
);
