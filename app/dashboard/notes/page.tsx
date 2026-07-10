"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

type Note = {
  id: string;
  title: string;
  subject: string;
  link: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      const snapshot = await getDocs(collection(db, "notes"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Note, "id">),
      }));

      setNotes(data);
    }

    loadNotes();
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        📚 Study Notes
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {notes.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">
              No notes uploaded yet.
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-pink-600">
                {note.title}
              </h2>

              <p className="text-gray-600 mt-2">
                Subject: {note.subject}
              </p>

              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
              >
                Open Notes
              </a>
            </div>
          ))
        )}
      </div>
    </main>
  );
}