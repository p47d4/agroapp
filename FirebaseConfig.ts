import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrGDnlatKukPrzHvjak_kgn9OTH3NfWVA",
  authDomain: "agroappexpo.firebaseapp.com",
  projectId: "agroappexpo",
  storageBucket: "agroappexpo.appspot.com",
  messagingSenderId: "749339107416",
  appId: "1:749339107416:web:6d44d063ee83b3b993ea2d",
  measurementId: "G-QM1ZHV3MV9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

const analytics = getAnalytics(FIREBASE_APP);