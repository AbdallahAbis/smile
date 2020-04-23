import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  facebookProvider,
  createUserDocument,
  getCurrentUser,
  addCartItemsToUserProfile
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from "./user.actions";

function* getSnapshotFromUserAuth(user, otherInfo) {
  try {
    const userRef = yield call(createUserDocument, user, otherInfo);
    const snapshot = yield userRef.get();
    console.log(snapshot);
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield console.error(err.message);
  }
}
export function* signInWithFacebook() {
  try {
    const { user } = yield auth.signInWithPopup(facebookProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield console.error(err.message);
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield console.error(err.message);
    yield put(signInFailure("Email or Password is incorrect!"));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, otherInfo: { displayName } }));
  } catch (err) {
    yield put(signUpFailure(err.message));
  }
}

function* signInAfterSignUp({ payload: { user, otherInfo } }) {
  yield getSnapshotFromUserAuth(user, otherInfo);
}

function* signOut({ payload: { user, cartItems } }) {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    addCartItemsToUserProfile(user.id, cartItems);
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();

    if (user) {
      yield getSnapshotFromUserAuth(user);
    }
  } catch (err) {
    yield console.error(err.message);
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
function* onFacebookSignInStart() {
  yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook);
}
function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}
function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}
function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
function* onUserSessionCheck() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookSignInStart),
    call(onEmailSignInStart),
    call(onUserSessionCheck),
    call(onSignOut),
    call(onSignUp),
    call(onSignUpSuccess)
  ]);
}
