"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  const [name, setName] = useState("Student");

  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || "Student");
    }
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <Navbar />

      <div className="flex gap-8 mt-8">
        <Sidebar />

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-pink-600 text-center">
            Welcome Nishthuu ❤️🌸
          </h1>

          <p className="text-center text-gray-600 mt-3">
            Mission 90+ Study Dashboard
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {/* Subjects */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">📚 Subjects</h2>
              <p className="mt-2 text-gray-600">
                English, Hindi, Economics, Political Science, Fine Arts
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">🎯 Mission</h2>
              <p className="mt-2 text-gray-600">
                Target: 90%+
              </p>
            </div>

            {/* Today's Goal */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">📅 Today's Goal</h2>
              <p className="mt-2 text-gray-600">
                Complete 2 Chapters
              </p>
            </div>

            {/* Motivation */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">🔥 Motivation</h2>
              <p className="mt-2 text-gray-600 italic">
                "Small steps every day lead to big success."
              </p>
            </div>

            {/* Today's Tasks */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">✅ Today's Tasks</h2>

              <p className="mt-2 text-gray-600">
                Manage your daily study tasks here.
              </p>

              <Link
                href="/dashboard/tasks"
                className="inline-block mt-4 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
              >
                Open Tasks
              </Link>
            </div>

            {/* AI Assistant */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">🤖 AI Assistant</h2>

              <p className="mt-2 text-gray-600">
                Ask doubts, generate notes, summaries, MCQs and important questions instantly.
              </p>

              <Link
                href="/dashboard/ai"
                className="inline-block mt-4 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
              >
                Open AI
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}