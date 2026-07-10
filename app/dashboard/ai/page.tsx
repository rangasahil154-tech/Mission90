"use client";

import { useState } from "react";

export default function AIPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: question,
        }),
      });

      const data = await res.json();

      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        🤖 Mission90 AI
      </h1>

      <div className="mt-8 bg-pink-100 rounded-xl p-6 text-gray-900">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask any study question..."
          className="w-full border rounded-xl p-4 h-40 resize-none"
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="mt-5 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 disabled:bg-gray-400"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {answer && (
          <div className="mt-8 bg-pink-100 rounded-xl p-6 text-gray-900">
            <h2 className="font-bold text-xl mb-3 text-pink-700">
              AI Answer
            </h2>

            <p className="text-gray-900 whitespace-pre-wrap leading-8">
  {answer}
</p>
          </div>
        )}

      </div>
    </main>
  );
}