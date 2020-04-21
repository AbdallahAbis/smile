import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserDocument,
  getCurrentUser
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

    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield console.error(user);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    console.log(email, password, displayName);
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    console.log(user);

    yield put(signUpSuccess({ user, otherInfo: { displayName } }));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

function* signInAfterSignUp({ payload: { user, otherInfo } }) {
  yield getSnapshotFromUserAuth(user, otherInfo);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
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
    call(onEmailSignInStart),
    call(onUserSessionCheck),
    call(onSignOut),
    call(onSignUp),
    call(onSignUpSuccess)
  ]);
}
