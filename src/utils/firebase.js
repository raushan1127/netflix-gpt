// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQI7dwK1q3ncm2nI_H63niQ1yykEKwdo",
  authDomain: "netflixgpt-cfdd7.firebaseapp.com",
  projectId: "netflixgpt-cfdd7",
  storageBucket: "netflixgpt-cfdd7.firebasestorage.app",
  messagingSenderId: "139098044665",
  appId: "1:139098044665:web:4d9a14be80e430f44e4a28",
  measurementId: "G-ZZZFP8VT8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);