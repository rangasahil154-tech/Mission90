"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";

type Student = {
  id: string;
  name: string;
  email: string;
  class: string;
  stream: string;
  target: string;
};
export default function StudentsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentClass, setStudentClass] = useState("12");
  const [stream, setStream] = useState("Arts");
  const [target, setTarget] = useState("90");
  const [students, setStudents] = useState<Student[]>([]);

  async function loadStudents() {
  const snapshot = await getDocs(collection(db, "students"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Student, "id">),
  }));

  setStudents(data);
}

useEffect(() => {
  loadStudents();
}, []);

async function deleteStudent(id: string) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmDelete) return;

  await deleteDoc(doc(db, "students", id));

  await loadStudents();

  alert("✅ Student Deleted");
}  
async function createStudent() {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const res = await fetch("/api/admin/create-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        studentClass,
        stream,
        target,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Student Created Successfully");
      await loadStudents();

      setName("");
      setEmail("");
      setPassword("");
      setStudentClass("12");
      setStream("Arts");
      setTarget("90");
    } else {
      alert(data.message);
    }
  }

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        👨‍🎓 Student Management
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        />

        <select
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        >
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>

        <select
          value={stream}
          onChange={(e) => setStream(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 text-gray-900"
        >
          <option>Arts</option>
          <option>Commerce</option>
          <option>Medical</option>
          <option>Non Medical</option>
        </select>

        <input
          type="number"
          placeholder="Target %"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="w-full border rounded-xl p-3 mb-6 text-gray-900"
        />

        <button
          onClick={createStudent}
          className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700"
        >
          Create Student
      
        </button>
        

      <div className="mt-10">
  <h2 className="text-3xl font-bold text-pink-600 mb-6">
    📚 All Students
  </h2>

  {students.length === 0 ? (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <p className="text-gray-500">No students found.</p>
    </div>
  ) : (
    <div className="grid md:grid-cols-2 gap-6">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-pink-600">
            {student.name}
          </h3>

          <p className="mt-2 text-gray-700">
            📧 {student.email}
          </p>

          <p className="text-gray-700">
            🎓 Class {student.class}
          </p>

          <p className="text-gray-700">
            📖 {student.stream}
          </p>

          <p className="text-gray-700">
            🎯 Target {student.target}%
          </p>
          <button
  onClick={() => deleteStudent(student.id)}
  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
>
  🗑 Delete Student
</button>
          
        </div>
      ))}
    </div>
  )}
</div>
      </div>
    </main>
  );
}