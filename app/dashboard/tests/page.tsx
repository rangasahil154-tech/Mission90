"use client";

import { useEffect, useState } from "react";
import { getTests } from "../../../lib/tests";

type Test = {
  id: string;
  title: string;
  subject: string;
  link: string;
  password: string;
};

export default function TestsPage() {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    async function loadTests() {
      const data = await getTests();
      setTests(data as Test[]);
    }

    loadTests();
  }, []);

  const openTest = (test: Test) => {
    const enteredPassword = prompt(
      `Enter password for "${test.title}"`
    );

    if (enteredPassword === null) return;

    if (enteredPassword === test.password) {
      window.open(test.link, "_blank");
    } else {
      alert("❌ Incorrect Password");
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        📝 Weekly Tests
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {tests.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">
              No tests uploaded yet.
            </p>
          </div>
        ) : (
          tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-pink-600">
                {test.title}
              </h2>

              <p className="text-gray-600 mt-2">
                Subject: {test.subject}
              </p>

              <button
                onClick={() => openTest(test)}
                className="inline-block mt-5 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
              >
                🔒 Open Test
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}