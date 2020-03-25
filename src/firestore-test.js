import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("kzOOGdvJIfiDIjwtlsQU")
  .collection("cartItems")
  .doc("JafqVs6qU2noliHKzOFv");

firestore.doc("/users/kzOOGdvJIfiDIjwtlsQU/cartItems/JafqVs6qU2noliHKzOFv");
