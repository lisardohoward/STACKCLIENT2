// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAh9FkXWUEN3JlNGsCyCIbDVZFwoSxvkM0",
  authDomain: "test-2c37b.firebaseapp.com",
  projectId: "test-2c37b",
  storageBucket: "test-2c37b.firebasestorage.app",
  messagingSenderId: "761595289356",
  appId: "1:761595289356:web:06ea35ca130954349ab329"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
