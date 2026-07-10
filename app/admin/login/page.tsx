"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (user.user.email !== "admin@mission90.com") {
        alert("Access Denied");

        await auth.signOut();

        return;
      }

      router.push("/admin/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center text-pink-600">
          👨‍💼 Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-6 p-3 border rounded-lg text-gray-900 placeholder:text-gray-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-4 p-3 border rounded-lg text-gray-900 placeholder:text-gray-600"
        />

        <button
          onClick={login}
          className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          Login
        </button>

      </div>

    </main>
  );
}