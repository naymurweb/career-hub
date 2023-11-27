// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwiu_bfVFVNArcn-RBJjKqylb-PNZadSQ",
  authDomain: "simple-firebase-b1b43.firebaseapp.com",
  projectId: "simple-firebase-b1b43",
  storageBucket: "simple-firebase-b1b43.appspot.com",
  messagingSenderId: "146457154812",
  appId: "1:146457154812:web:c53ced8b163a039edc3379",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;