// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//opcional
//  apiKey: import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyC1DLoL0elIgLgL1u7aYxPBCshuemIgwh4",
  authDomain: "coder-flex-81735.firebaseapp.com",
  projectId: "coder-flex-81735",
  storageBucket: "coder-flex-81735.firebasestorage.app",
  messagingSenderId: "627609045639",
  appId: "1:627609045639:web:988ea54cf073c971348622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar la instancia de Firestore. 
export const db = getFirestore(app)