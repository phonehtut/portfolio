import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqrrOD4MFz2_SPPojrZLfFFmj391yau3M",
  authDomain: "portfilio-41be0.firebaseapp.com",
  projectId: "portfilio-41be0",
  storageBucket: "portfilio-41be0.firebasestorage.app",
  messagingSenderId: "725390992518",
  appId: "1:725390992518:web:88e2173d0b26fb8b469d07",
  measurementId: "G-58VQCQJR84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc, analytics };