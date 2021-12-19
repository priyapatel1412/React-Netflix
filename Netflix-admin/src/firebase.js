//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-c43ef.firebaseapp.com",
  projectId: "netflix-c43ef",
  storageBucket: "netflix-c43ef.appspot.com",
  messagingSenderId: "714639614044",
  appId: "1:714639614044:web:31201e407df77699ffc699",
  measurementId: "G-MNJLKWVB3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
