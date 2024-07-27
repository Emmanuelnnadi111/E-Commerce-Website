// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcP0r04reZkDo6bOxxMEmyU1OrLBsilHc",
  authDomain: "ecommerce-auth-3bf8d.firebaseapp.com",
  projectId: "ecommerce-auth-3bf8d",
  storageBucket: "ecommerce-auth-3bf8d.appspot.com",
  messagingSenderId: "1020277154543",
  appId: "1:1020277154543:web:ba5894860e09de9684311a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;
