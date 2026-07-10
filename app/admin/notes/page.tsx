"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default function AdminNotesPage() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("English");
  const [link, setLink] = useState("");

  const uploadNote = async () => {
    if (!title || !link) {
      alert("Please fill all fields.");
      return;
    }

    await addDoc(collection(db, "notes"), {
      title,
      subject,
      link,
      createdAt: new Date(),
    });

    alert("✅ Note Uploaded Successfully!");

    setTitle("");
    setSubject("English");
    setLink("");
  };

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        📚 Upload Notes
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Economics</option>
          <option>Political Science</option>
          <option>Fine Arts</option>
        </select>

        <input
          type="text"
          placeholder="Google Drive / PDF Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
        />

        <button
          onClick={uploadNote}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
        >
          Upload Note
        </button>

      </div>
    </main>
  );
}