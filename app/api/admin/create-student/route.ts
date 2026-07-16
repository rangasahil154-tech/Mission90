import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const { name, email, password, studentClass, stream, target } =
      await req.json();

    // Firebase Authentication me user create
    const user = await adminAuth.createUser({
      email,
      password,
      displayName: name,
    });

    // Firestore me student profile save
    await adminDb.collection("students").doc(user.uid).set({
      uid: user.uid,
      name,
      email,
      class: studentClass,
      stream,
      target,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Student created successfully",
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}