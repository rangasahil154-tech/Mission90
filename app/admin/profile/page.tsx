"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function AdminProfilePage() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [target, setTarget] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const snap = await getDoc(doc(db, "profile", "student"));

      if (snap.exists()) {
        const data = snap.data();
        setName(data.name || "");
        setSchool(data.school || "");
        setStudentClass(data.studentClass || "");
        setTarget(data.target || "");
      }
    }

    loadProfile();
  }, []);

  const saveProfile = async () => {
    await setDoc(doc(db, "profile", "student"), {
      name,
      school,
      studentClass,
      target,
    });

    alert("✅ Profile Updated Successfully");
  };

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        👤 Edit Student Profile
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
         className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        />

        <input
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        />

        <input
          type="text"
          placeholder="Class"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        />

        <input
          type="text"
          placeholder="Target %"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        />

        <button
          onClick={saveProfile}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
        >
          Save Profile
        </button>

      </div>
    </main>
  );
}