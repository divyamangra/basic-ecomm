import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuqJrJchQ3CT5-L6mlOBYB6ynn0S7pM_k",
  authDomain: "divyams-market.firebaseapp.com",
  projectId: "divyams-market",
  storageBucket: "divyams-market.appspot.com",
  messagingSenderId: "253062410642",
  appId: "1:253062410642:web:7da2699078ec6e43f6114b",
  measurementId: "G-R02ZFHJEWJ"
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
