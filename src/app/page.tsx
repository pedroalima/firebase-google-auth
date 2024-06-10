"use client";
import { auth } from "@/services/firebase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ userProfile, setUserProfile ] = useState<User | null>(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUserProfile(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogout = () => {
    console.log("click");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {userProfile ? (
        <div className="flex flex-col justify-center items-center gap-5">
          {userProfile.photoURL && <Image src={userProfile.photoURL} width="300" height="300" className="rounded-full w-16" alt="foto de perfil" />}
          <button 
            className="cursor-pointer px-6 py-2 border border-white rounded-lg"
            onClick={handleGoogleLogout}
          >Sair</button>
        </div>
      ) : (
        <div>
          <button 
            className="cursor-pointer px-6 py-2 border border-white rounded-lg"
            onClick={handleGoogleSignIn}
          >Entrar com o Google</button>
        </div>
      )}
    </main>
  );
}
