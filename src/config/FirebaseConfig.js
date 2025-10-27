// src/config/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBt0cccUstxLyoFoGrjr_Tlg3mrLw0kjI8",
    authDomain: "gorbnjra.firebaseapp.com",
    projectId: "gorbnjra",
    storageBucket: "gorbnjra.firebasestorage.app",
    messagingSenderId: "501048003703",
    appId: "1:501048003703:web:41c5f510995d9a94918a72"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
