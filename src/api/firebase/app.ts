import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbmz4DJl9kHxI6ZqOO1csCruLtgGXLTWQ",
  authDomain: "martin-811c6.firebaseapp.com",
  projectId: "martin-811c6",
  storageBucket: "martin-811c6.firebasestorage.app",
  messagingSenderId: "534361608704",
  appId: "1:534361608704:web:7c34c25afccf013b183ee5",
  measurementId: "G-CCHMDGNXDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
