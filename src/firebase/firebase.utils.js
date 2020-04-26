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

export const addCartItemsToUserProfile = async (id, itemsToAdd) => {
  const userRef = firestore.doc(`users/${id}`);
  const snapShot = await userRef.get();
  const userData = snapShot.data();

  await userRef.set({
    ...userData,
    cartItems: itemsToAdd
  });
};

export const getCartItems = async id => {
  const userRef = firestore.doc(`users/${id}`);

  const snapShot = await userRef.get();
  const userData = snapShot.data();

  return userData.cartItems;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAth => {
      unsubscribe();
      resolve(userAth);
    }, reject);
  });
};

// Adds Data To Firebase
/*const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    const objItems = obj.items;
    objItems.forEach(item => (item.id = uuidv4()));
    batch.set(newDocRef, { ...obj, items: objItems });
  });

  return await batch.commit();
}; */

export const convertCollectionsSnapshotToMap = collections => {
  const allProducts = () => {
    const transformedAll = collections.docs.map(doc => {
      const { title, imageUrl, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        imageUrl,
        title,
        items
      };
    });
    return transformedAll.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  const ProductsInArray = (firstNumber, secondNumber) => {
    let array = [];
    collections.docs.map(doc => {
      const { items } = doc.data();
      return array.push(items);
    });
    const products = array.flat(1);
    return products.filter(
      (product, ind) => ind > firstNumber && ind < secondNumber
    );
  };
  return {
    allProducts: allProducts(),
    featuredProducts: ProductsInArray(0, 9),
    newProducts: ProductsInArray(34, 55)
  };
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
