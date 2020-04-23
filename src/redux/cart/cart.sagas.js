import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";

import {
  addCartItemsToUserProfile,
  getCartItems
} from "../../firebase/firebase.utils";


import { fetchCartItems, clearCart } from "./cart.actions";

function* fetchCartOnSignIn() {
  console.log(fetchCartItems(getCartItems("fqO6niRqKiWGwPpFKyfZWKT7il63")));
  const items = yield getCartItems("fqO6niRqKiWGwPpFKyfZWKT7il63");
  yield put(fetchCartItems(items));
}
function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccessClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
function* onSignInSuccessFetchCart() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCartOnSignIn);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccessClearCart), call(onSignInSuccessFetchCart)]);
}
