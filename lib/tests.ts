import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const testsCollection = collection(db, "tests");

// Upload Test
export async function uploadTest(
  title: string,
  subject: string,
  link: string,
  password: string
) {
  await addDoc(testsCollection, {
    title,
    subject,
    link,
    password,
    createdAt: new Date(),
  });
}

// Get Tests
export async function getTests() {
  const snapshot = await getDocs(testsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// Delete Test
export async function deleteTest(id: string) {
  await deleteDoc(doc(db, "tests", id));
}