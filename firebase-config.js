// file: firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup       // KITA PAKAI POPUP LAGI (LEBIH STABIL DI CHROME IP)
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// --- CONFIG FIREBASE KAMU ---
const firebaseConfig = {
    apiKey: "AIzaSyAJWbqP-uX1O1uHGUhotGI6r8hgvrALj84", // <--- WAJIB DIISI
    authDomain: "undanginaja-9ab71.firebaseapp.com",
    projectId: "undanginaja-9ab71",
    storageBucket: "undanginaja-9ab71.appspot.com",
    messagingSenderId: "1069509999582", // <--- WAJIB DIISI
    appId: "1:1069509999582:web:2c4e34626e2b35c0573b4f"                 // <--- WAJIB DIISI
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
    app, db, auth, 
    doc, getDoc, setDoc, updateDoc, 
    onAuthStateChanged, signOut, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup 
};