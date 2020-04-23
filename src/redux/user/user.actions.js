import UserActionTypes from "./user.types";

// Actions Start
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const facebookSignInStart = () => ({
  type: UserActionTypes.FACEBOOK_SIGN_IN_START
});
export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});
export const signOutStart = (user, cartItems) => ({
  type: UserActionTypes.SIGN_OUT_START,
  payload: { user, cartItems }
});

// Actions Success
export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

// Actions Failure
export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

// Check User Session
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
