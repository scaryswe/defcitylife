import { initializeApp } from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcn4p6Cn_zTBuv4YW3RugtTduuGxBoYqg",
  authDomain: "defcitylife.firebaseapp.com",
  projectId: "defcitylife",
  storageBucket: "defcitylife.appspot.com",
  messagingSenderId: "888056481096",
  appId: "1:888056481096:web:dd81b993cd78479f515f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);