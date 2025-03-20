// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRiSRE4V_suV6TfsND0DijfRFegW1kP5s",
  authDomain: "fir-webimpact-yokatea.firebaseapp.com",
  projectId: "fir-webimpact-yokatea",
  storageBucket: "fir-webimpact-yokatea.firebasestorage.app",
  messagingSenderId: "210166581697",
  appId: "1:210166581697:web:5058e4e1cacb597bc7c740",
  measurementId: "G-H563537XQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);