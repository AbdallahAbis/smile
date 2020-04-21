import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPLe7SB-nLpxnCPnYWbDYWbfUpwGHE3tE",
  authDomain: "wearandsmileabis.firebaseapp.com",
  databaseURL: "https://wearandsmileabis.firebaseio.com",
  projectId: "wearandsmileabis",
  storageBucket: "wearandsmileabis.appspot.com",
  messagingSenderId: "955446611535",
  appId: "1:955446611535:web:77edb25b66026b629f243a",
  measurementId: "G-NGEK1P7X17"
};

firebase.initializeApp(config);

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAth => {
      unsubscribe();
      resolve(userAth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
