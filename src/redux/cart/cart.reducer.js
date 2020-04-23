import { addItemToCart, removeItemFromCart, ClearItem } from "./cart.utils";
import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case CartActionTypes.FETCH_CART_ITEMS:
      console.log(action.payload);

      return {
        ...state,
        cartItems: action.payload ? action.payload : []
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: ClearItem(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        isHidden: true
      };
    default:
      return state;
  }
};

export default cartReducer;
