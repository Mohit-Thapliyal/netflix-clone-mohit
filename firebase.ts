// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuUSnvSpHvyVUYDFT--N9VdTW71WA2rIs",
  authDomain: "netflix-clone-mohit.firebaseapp.com",
  projectId: "netflix-clone-mohit",
  storageBucket: "netflix-clone-mohit.appspot.com",
  messagingSenderId: "674375795342",
  appId: "1:674375795342:web:32eaec126bf6c2c5f03fdf",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
