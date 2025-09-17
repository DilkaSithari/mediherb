import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDq63TcQEcvgqNDYQ6Oz_AUZ378NpM_l9M",
    authDomain: "mediherb-c4c2b.firebaseapp.com",
    projectId: "mediherb-c4c2b",
    storageBucket: "mediherb-c4c2b.firebasestorage.app",
    messagingSenderId: "80170381289",
    appId: "1:80170381289:web:42b61e140cbddec79ba578",
    measurementId: "G-DZMRHDNB0G"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
