import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDChop_IktCMhpHVuCRX_FjEteQXB_NV98",
  authDomain: "crwn-db-b3a3d.firebaseapp.com",
  databaseURL: "https://crwn-db-b3a3d.firebaseio.com",
  projectId: "crwn-db-b3a3d",
  storageBucket: "crwn-db-b3a3d.appspot.com",
  messagingSenderId: "897786288959",
  appId: "1:897786288959:web:4259591ed0242151d6d18a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
      console.log("Error Creating User", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
