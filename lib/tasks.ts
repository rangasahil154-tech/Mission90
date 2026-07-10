import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const tasksCollection = collection(db, "tasks");

// Add Task
export async function addTask(text: string) {
  await addDoc(tasksCollection, {
    text,
    completed: false,
  });
}

// Get All Tasks
export async function getTasks() {
  const snapshot = await getDocs(tasksCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// Delete Task
export async function deleteTask(id: string) {
  await deleteDoc(doc(db, "tasks", id));
}

// Update Task
export async function updateTask(id: string, data: any) {
  await updateDoc(doc(db, "tasks", id), data);
}