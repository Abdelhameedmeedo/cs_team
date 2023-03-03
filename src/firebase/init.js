// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'
import  {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyCHMLY-jt104VlQsuPqLJiVX0_MdWu6I0U",
  authDomain: "cs-final-project-e6867.firebaseapp.com",
  projectId: "cs-final-project-e6867",
  storageBucket: "cs-final-project-e6867.appspot.com",
  messagingSenderId: "661973370847",
  appId: "1:661973370847:web:2f2d96fb5a20c717faa66a",
  measurementId: "G-VS34YECX12"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase()
// const db_1 = getFirestore()
export  {
  db
}