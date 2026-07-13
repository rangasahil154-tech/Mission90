"use client";

import { useEffect, useState } from "react";
import { uploadTest, getTests, deleteTest } from "../../../lib/tests";

type Test = {
  id: string;
  title: string;
  subject: string;
  link: string;
  password: string;
};

export default function AdminTestsPage() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("English");
  const [link, setLink] = useState("");
  const [password, setPassword] = useState("");

  const [tests, setTests] = useState<Test[]>([]);

  async function loadTests() {
    const data = await getTests();
    setTests(data as Test[]);
  }

  useEffect(() => {
    loadTests();
  }, []);

  const handleUpload = async () => {
    if (!title || !link || !password) {
      alert("Please fill all fields.");
      return;
    }

    await uploadTest(title, subject, link, password);

    alert("✅ Test Uploaded Successfully!");

    setTitle("");
    setSubject("English");
    setLink("");
    setPassword("");

    loadTests();
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this test?");

    if (!confirmDelete) return;

    await deleteTest(id);

    loadTests();
  };

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        📝 Upload Test
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">

        <input
          type="text"
          placeholder="Test Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
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
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <input
          type="password"
          placeholder="Test Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <button
          onClick={handleUpload}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
        >
          Upload Test
        </button>
      </div>

      <h2 className="text-3xl font-bold text-pink-600 mt-12 mb-6">
        Uploaded Tests
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900">
              {test.title}
            </h3>

            <p className="text-gray-600">
              {test.subject}
            </p>

            <button
              onClick={() => handleDelete(test.id)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}