// Import the functions you need from the SDKs you need
import {  getApp, getApps, initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR5S_Aq3649L2uoRPotawax6lVuZKVT0Q",
  authDomain: "prepwise-48fa0.firebaseapp.com",
  projectId: "prepwise-48fa0",
  storageBucket: "prepwise-48fa0.firebasestorage.app",
  messagingSenderId: "831720780085",
  appId: "1:831720780085:web:2b93b9f296334e446b5c7c",
  measurementId: "G-SZR481SSBZ"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);