import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d9bc0.firebaseapp.com",
  projectId: "reactchat-d9bc0",
  storageBucket: "reactchat-d9bc0.appspot.com",
  messagingSenderId: "330349989927",
  appId: "1:330349989927:web:200d68d4e6058cc612be02",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
