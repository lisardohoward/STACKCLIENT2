// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDZq9xsyI2TC1A0rWdAwRtitrkx9QzN9DY",
  authDomain: "linkproject-3b591.firebaseapp.com",
  projectId: "linkproject-3b591",
  storageBucket: "linkproject-3b591.firebasestorage.app",
  messagingSenderId: "158733563707",
  appId: "1:158733563707:web:aaca5c704765953713e91e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
