// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa9MSOArsbUsOSaQ9E4_Dhu5ZeA0xEpMQ",
  authDomain: "react-hooks-blogs-3fcc9.firebaseapp.com",
  projectId: "react-hooks-blogs-3fcc9",
  storageBucket: "react-hooks-blogs-3fcc9.appspot.com",
  messagingSenderId: "912618589883",
  appId: "1:912618589883:web:c5d8a703d74899c93c639e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();