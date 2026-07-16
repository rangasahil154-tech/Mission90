"use client";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";

type Notice = {
  id: string;
  title: string;
  message: string;
};

export default function AdminNoticesPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
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
    loadNotices();
  }, []);

  async function uploadNotice() {
    if (!title || !message) {
      alert("Fill all fields");
      return;
    }

    await addDoc(collection(db, "notices"), {
      title,
      message,
      createdAt: serverTimestamp(),
    });

    alert("✅ Notice Uploaded Successfully");

    setTitle("");
    setMessage("");

    await loadNotices();
  }

  async function deleteNotice(id: string) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "notices", id));

    alert("✅ Notice Deleted");

    await loadNotices();
  }

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        📢 Notice Board
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">

        <input
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <textarea
          placeholder="Notice Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full border rounded-xl p-3 mb-6 text-gray-900"
        />

        <button
          onClick={uploadNotice}
          className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700"
        >
          Upload Notice
        </button>
      </div>

      <div className="mt-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">
          📋 All Notices
        </h2>

        {notices.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">
              No notices uploaded yet.
            </p>
          </div>
        ) : (
          notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl shadow-lg p-6 mb-5"
            >
              <h3 className="text-2xl font-bold text-pink-600">
                {notice.title}
              </h3>

              <p className="mt-3 text-gray-700">
                {notice.message}
              </p>

              <button
                onClick={() => deleteNotice(notice.id)}
                className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
              >
                🗑 Delete Notice
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}