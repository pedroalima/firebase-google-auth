"use client";

import { auth } from "@/services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default function Home() {

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <button 
          className="cursor-pointer px-6 py-2 border border-white rounded-lg"
          onClick={handleGoogleSignIn}
        >Entrar com o Google</button>
      </div>
    </main>
  );
}
