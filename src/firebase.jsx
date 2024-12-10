// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAAZT1-oqqUx6eC2FooDf5WWwRWQTrVAeQ",
  authDomain: "stackproject-f4762.firebaseapp.com",
  projectId: "stackproject-f4762",
  storageBucket: "stackproject-f4762.firebasestorage.app",
  messagingSenderId: "26010848413",
  appId: "1:26010848413:web:23e9c9cb049ce5df351874"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
