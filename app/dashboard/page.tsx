"use client";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [stream, setStream] = useState("");
const [subjects, setSubjects] = useState<string[]>([]);
  const [name, setName] = useState("Student");
  type Notice = {
  id: string;
  title: string;
  message: string;
};

const [notices, setNotices] = useState<Notice[]>([]);

async function loadNotices() {
  const snapshot = await getDocs(collection(db, "notices"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Notice, "id">),
  }));

  setNotices(data);
}  
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (!user) return;

    setName(user.displayName || "Student");

    const studentRef = doc(db, "students", user.uid);
    const studentSnap = await getDoc(studentRef);

    if (studentSnap.exists()) { await loadNotices();
      const data = studentSnap.data();

      setStream(data.stream);

      if (data.stream === "Arts") {
        setSubjects([
          "English",
          "Hindi",
          "Economics",
          "Political Science",
          "Fine Arts",
        ]);
      } else if (data.stream === "Non Medical") {
        setSubjects([
          "Physics",
          "Chemistry",
          "Mathematics",
          "Computer Science",
          "English",
        ]);
      } else if (data.stream === "Medical") {
        setSubjects([
          "Physics",
          "Chemistry",
          "Biology",
          "English",
        ]);
      } else if (data.stream === "Commerce") {
        setSubjects([
          "Accountancy",
          "Business Studies",
          "Economics",
          "English",
        ]);
      }
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <Navbar />

      <div className="flex gap-8 mt-8">
        <Sidebar />

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-pink-600 text-center">
  Welcome {name} 👋
</h1>

          <p className="text-center text-gray-600 mt-3">
  Mission90 Student Dashboard
</p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {/* Subjects */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">📚 Subjects</h2>
              <p className="mt-2 text-gray-600">
  {subjects.join(", ")}
</p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">🎯 Mission</h2>
              <p className="mt-2 text-gray-600">
                Target: 90%+
              </p>
            </div>

            {/* Notice Board */}
<div className="bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-2xl font-bold text-gray-900">
    📢 Notice Board
  </h2>

  {notices.length === 0 ? (
    <p className="mt-2 text-gray-500">
      No Notices Available.
    </p>
  ) : (
    notices.map((notice) => (
      <div
        key={notice.id}
        className="border-b pb-3 mb-3"
      >
        <h3 className="font-bold text-pink-600">
          {notice.title}
        </h3>

        <p className="text-gray-600">
          {notice.message}
        </p>
      </div>
    ))
  )}
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