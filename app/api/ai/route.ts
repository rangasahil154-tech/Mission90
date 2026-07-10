import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await ai.models.generateContent({
      model: "models/gemini-3-flash-preview",
      contents: `
You are Mission90 AI.

Rules:
- Answer only study-related questions.
- Help CBSE Class 12 students.
- Explain in simple Hindi and English.
- Create notes, MCQs, summaries and important questions.
- If the question is not about studies, reply:
"I am Mission90 AI and I only help with studies."

Student Question:
${prompt}
`,
    });

    return NextResponse.json({
      answer: response.text,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        answer: error?.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}