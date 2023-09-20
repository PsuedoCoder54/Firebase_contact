// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtF8_7uwsgeD8DK5fr9xUIwxcXlxSN8KY",
  authDomain: "vite-firebase-contact.firebaseapp.com",
  projectId: "vite-firebase-contact",
  storageBucket: "vite-firebase-contact.appspot.com",
  messagingSenderId: "943201496262",
  appId: "1:943201496262:web:2db8596749c9decda2bbc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);