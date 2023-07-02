// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqKdnOcd43voqCg8vUdNdN6fuEg5R6emA",
  authDomain: "fsd22i-remainder-app.firebaseapp.com",
  projectId: "fsd22i-remainder-app",
  storageBucket: "fsd22i-remainder-app.appspot.com",
  messagingSenderId: "808979201175",
  appId: "1:808979201175:web:16829932966decb2f67dd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
