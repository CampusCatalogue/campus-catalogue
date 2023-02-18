// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbMgdd1i1Cxph0NFM5PAbFNKJgqAzOox4",
  authDomain: "campus-catalogue-b9d95.firebaseapp.com",
  projectId: "campus-catalogue-b9d95",
  storageBucket: "campus-catalogue-b9d95.appspot.com",
  messagingSenderId: "643851597499",
  appId: "1:643851597499:web:d0aff4e880b47d83479b9e",
  measurementId: "G-41YRZTQXM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export const provider=new GoogleAuthProvider();
export const auth = getAuth(app);
const analytics = getAnalytics(app);