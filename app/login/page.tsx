"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center text-pink-600">
          Student Login 🌸
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-6 p-3 border rounded-lg text-gray-900"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-4 p-3 border rounded-lg text-gray-900"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </main>
  );
}