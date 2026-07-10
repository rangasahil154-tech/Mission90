"use client";

import { useEffect, useState } from "react";
import {
  addTask as saveTask,
  getTasks,
  deleteTask as removeTask,
  updateTask,
} from "../../../lib/tasks";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data as any);
  }

  async function addTask() {
    if (!newTask.trim()) return;

    await saveTask(newTask);
    setNewTask("");

    await loadTasks();
  }

  async function toggleTask(task: any) {
    await updateTask(task.id, {
      completed: !task.completed,
    });

    await loadTasks();
  }

  async function deleteTask(id: string) {
    await removeTask(id);

    await loadTasks();
  }

  async function editTask(task: any) {
    const updated = prompt("Edit Task", task.text);

    if (!updated || updated.trim() === "") return;

    await updateTask(task.id, {
      text: updated,
    });

    await loadTasks();
  }

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        ✅ Today's Tasks
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl">

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500"
          />

          <button
            onClick={addTask}
            className="bg-pink-600 text-white px-6 rounded-xl hover:bg-pink-700"
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks available.
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task)}
                  className="w-5 h-5 cursor-pointer"
                />

                <span
                  className={
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }
                >
                  {task.text}
                </span>

              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => editTask(task)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                >
                  ✏️
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  🗑️
                </button>

              </div>
            </div>
          ))
        )}

      </div>
    </main>
  );
}