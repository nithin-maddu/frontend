// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD99aGcvlUxfkPyCYe9aNDSSJ20YCOgjHQ",
  authDomain: "shopping-45796.firebaseapp.com",
  projectId: "shopping-45796",
  storageBucket: "shopping-45796.firebasestorage.app",
  messagingSenderId: "777751329179",
  appId: "1:777751329179:web:5cbdf5147949f90825493e",
  measurementId: "G-GG073CFW6D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();