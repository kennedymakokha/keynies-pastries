// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
 
  apiKey: "AIzaSyCCdzSomMFIfknGj7vFLmi6-LKNUIRH9Cw",
  authDomain: "kakituapp.firebaseapp.com",
  projectId: "kakituapp",
  storageBucket: "kakituapp.firebasestorage.app",
  messagingSenderId: "182315326234",
  appId: "1:182315326234:web:7e7eddbe753f0989d92aa3",
 
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

export { app, messaging, onMessage };
