// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA9cL3NvNuRjXFM9EyWxQFdSIvNDimczw",
  authDomain: "crypto-app-9cd01.firebaseapp.com",
  projectId: "crypto-app-9cd01",
  storageBucket: "crypto-app-9cd01.appspot.com",
  messagingSenderId: "115572934511",
  appId: "1:115572934511:web:8af7f876cf26e493568a9a",
  measurementId: "G-780VT88T06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
