import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartItems"]
};

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  user: userReducer
});

export default rootReducer;
