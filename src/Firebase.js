import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6iMPjiDJIjoH66Ze4iqOgaIt3TfwENoY",
    authDomain: "yoka-tea.firebaseapp.com",
    projectId: "yoka-tea",
    storageBucket: "yoka-tea.firebasestorage.app",
    messagingSenderId: "103533124364",
    appId: "1:103533124364:web:ddaa71b008d8bfc7150729",
    measurementId: "G-2QDYZYY8YJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
