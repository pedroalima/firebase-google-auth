import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ9lCo7Xdloa6bLnCV1Ejra-TlWi-1Fg8",
  authDomain: "fir-auth-da29c.firebaseapp.com",
  projectId: "fir-auth-da29c",
  storageBucket: "fir-auth-da29c.appspot.com",
  messagingSenderId: "995356434208",
  appId: "1:995356434208:web:2e9daa0a21b7f06097c145"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);