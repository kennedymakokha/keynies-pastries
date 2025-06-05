// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCdzSomMFIfknGj7vFLmi6-LKNUIRH9Cw",
  authDomain: "kakituapp.firebaseapp.com",
  projectId: "kakituapp",
  storageBucket: "kakituapp.firebasestorage.app",
  messagingSenderId: "182315326234",
  appId: "1:182315326234:web:7e7eddbe753f0989d92aa3",
  measurementId: "G-F7DD52QTVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);