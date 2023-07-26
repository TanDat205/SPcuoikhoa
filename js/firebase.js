// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArBrdLuZYN-Uof_cUSKt2vzdxlsAS3aH8",
  authDomain: "final-project-2ad0c.firebaseapp.com",
  projectId: "final-project-2ad0c",
  storageBucket: "final-project-2ad0c.appspot.com",
  messagingSenderId: "150558453449",
  appId: "1:150558453449:web:1990d593fe902db7efe718",
  measurementId: "G-KEDN75H6QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);