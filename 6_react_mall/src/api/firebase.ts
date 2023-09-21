// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAu4dL4fptpMR45BfTLKGY7_gD4dA2m6mE",
    authDomain: "learn-firebase-76eb1.firebaseapp.com",
    projectId: "learn-firebase-76eb1",
    storageBucket: "learn-firebase-76eb1.appspot.com",
    messagingSenderId: "615562439711",
    appId: "1:615562439711:web:2c9129faf143873d95f92a",
    measurementId: "G-8XTKHW53LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);