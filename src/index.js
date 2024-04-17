// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYPv8S_ljSo3tuMNoRYPI2tleWOqhqFMM",
  authDomain: "commumeter.firebaseapp.com",
  projectId: "commumeter",
  storageBucket: "commumeter.appspot.com",
  messagingSenderId: "1098693151947",
  appId: "1:1098693151947:web:c0ce3c093e75ae8cbe1f4e",
  measurementId: "G-71SRN52DX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);