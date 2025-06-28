// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getAuth } from "firebase/auth";           // If using Auth
import { getStorage } from "firebase/storage";     // If using Storage

const firebaseConfig = {
    apiKey: "AIzaSyB3UmIAKLfgSdgwcgfZFM4fZDrqppEHZNU",
    authDomain: "landingpage-wvs-9936c.firebaseapp.com",
    projectId: "landingpage-wvs-9936c",
    storageBucket: "landingpage-wvs-9936c.firebasestorage.app",
    messagingSenderId: "23770509992",
    appId: "1:23770509992:web:0c57e5e6b3445b990b489d",
    measurementId: "G-YFBSLLZP1G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services you'll use
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
