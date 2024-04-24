// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Azx2ZMrM8lGrwqMkYHP0IxtAmD9q41A",
  authDomain: "dented-code-projects.firebaseapp.com",
  projectId: "dented-code-projects",
  storageBucket: "dented-code-projects.appspot.com",
  messagingSenderId: "623098220898",
  appId: "1:623098220898:web:91cd3174a2849b273edc3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)
export const auth = getAuth(app)
