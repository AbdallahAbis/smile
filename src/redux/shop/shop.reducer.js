import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  products: [],
  errorMessage: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        errorMessage: null
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        products: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
