// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4xCJSyD95di7l08F9ECSgJmexsU5pAi8",
  authDomain: "netflixauth-76a4a.firebaseapp.com",
  projectId: "netflixauth-76a4a",
  storageBucket: "netflixauth-76a4a.firebasestorage.app",
  messagingSenderId: "744951068604",
  appId: "1:744951068604:web:a98d0c01d51a6ad8bdddb9",
  measurementId: "G-8RFB2LZE72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
