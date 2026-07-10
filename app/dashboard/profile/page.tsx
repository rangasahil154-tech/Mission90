"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    school: "",
    studentClass: "",
    target: "",
  });

  useEffect(() => {
    async function loadProfile() {
      const snap = await getDoc(doc(db, "profile", "student"));

      if (snap.exists()) {
        setProfile(snap.data() as any);
      }
    }

    loadProfile();
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        👤 Student Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl">

        <div className="flex justify-center mb-6">
          <img
            src="https://ui-avatars.com/api/?name=Student&background=f472b6&color=fff&size=200"
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
        </div>

        <div className="space-y-4 text-lg">

          <p>
            <strong>Name:</strong> {profile.name}
          </p>

          <p>
            <strong>School:</strong> {profile.school}
          </p>

          <p>
            <strong>Class:</strong> {profile.studentClass}
          </p>

          <p>
            <strong>Target:</strong> {profile.target}
          </p>

        </div>

      </div>
    </main>
  );
}