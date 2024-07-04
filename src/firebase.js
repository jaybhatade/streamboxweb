// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVJCtM8oliZeM3oWrR4YZ1Mti2qZVaFkQ",
  authDomain: "streambox-70a34.firebaseapp.com",
  databaseURL: "https://streambox-70a34-default-rtdb.firebaseio.com",
  projectId: "streambox-70a34",
  storageBucket: "streambox-70a34.appspot.com",
  messagingSenderId: "339579014087",
  appId: "1:339579014087:web:42800c2d82c5867d78e7e2",
  measurementId: "G-T9X28VPQS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);