"use client";

export default function Home() {

  const handleGoogleSignIn = () => {
    console.log("Click");
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
