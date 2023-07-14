// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2WprDLk_VInE_8LPs9IDvtvQlK6QDK74",
    authDomain: "agape-63985.firebaseapp.com",
    projectId: "agape-63985",
    storageBucket: "agape-63985.appspot.com",
    messagingSenderId: "98074170465",
    appId: "1:98074170465:web:84aa082b07b2f8348bc620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };