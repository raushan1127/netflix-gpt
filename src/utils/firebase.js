// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEkrl0u5ZYSFx6HX-4Ks8E9ecyXjoMLvs",
  authDomain: "netflixgpt-eddfb.firebaseapp.com",
  projectId: "netflixgpt-eddfb",
  storageBucket: "netflixgpt-eddfb.firebasestorage.app",
  messagingSenderId: "873807279748",
  appId: "1:873807279748:web:3c17e38ee2af8301a574d1",
  measurementId: "G-GWW2G35DJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();