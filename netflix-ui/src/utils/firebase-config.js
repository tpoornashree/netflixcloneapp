import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
//change to ur firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKWjSQ99mILNo4BN5ZTBlSLNTy6usEjwU",
  authDomain: "react-netflix-clone-45c78.firebaseapp.com",
  projectId: "react-netflix-clone-45c78",
  storageBucket: "react-netflix-clone-45c78.appspot.com",
  messagingSenderId: "1096562464689",
  appId: "1:1096562464689:web:ac8a829b4309083b4a0f90",
  measurementId: "G-WGB77YHEFR"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
