// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVJCtM8oliZeM3oWrR4YZ1Mti2qZVaFkQ",
  authDomain: "streambox-70a34.firebaseapp.com",
  databaseURL: "https://streambox-70a34-default-rtdb.firebaseio.com",
  projectId: "streambox-70a34",
  storageBucket: "streambox-70a34.appspot.com",
  messagingSenderId: "339579014087",
  appId: "1:339579014087:web:42800c2d82c5867d78e7e2",
  measurementId: "G-T9X28VPQS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app);

// Export the Firebase services
export { app, auth, googleProvider, database, storage };
