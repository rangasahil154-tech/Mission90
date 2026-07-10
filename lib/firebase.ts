import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1R6DQcM1ccRtmlv0ovdCyTPCEdgb8CV0",
  authDomain: "mission90-1a954.firebaseapp.com",
  projectId: "mission90-1a954",
  storageBucket: "mission90-1a954.firebasestorage.app",
  messagingSenderId: "682551801014",
  appId: "1:682551801014:web:12643b4b65b4ddfda2e217",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);