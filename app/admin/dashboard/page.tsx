"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../lib/firebase";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/admin/login");
        return;
      }

      if (user.email !== "admin@mission90.com") {
        auth.signOut();
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  async function logout() {
    await auth.signOut();
    router.push("/admin/login");
  }

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <AdminNavbar />

      <div className="flex gap-8 mt-8">
        <AdminSidebar />

        <div className="flex-1">

          {/* Top */}
          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-5xl font-bold text-pink-600">
                👨‍💼 Welcome Admin
              </h1>

              <p className="text-gray-600 mt-3">
                Mission90 Admin Dashboard
              </p>
            </div>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                📚 Total Notes
              </h2>

              <p className="text-5xl font-bold text-pink-600 mt-4">
                0
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                📝 Total Tests
              </h2>

              <p className="text-5xl font-bold text-pink-600 mt-4">
                0
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                👨‍🎓 Students
              </h2>

              <p className="text-5xl font-bold text-pink-600 mt-4">
                1
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                ⚡ Quick Actions
              </h2>

              <div className="flex flex-col gap-4 mt-6">

                <button
                  className="bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700"
                >
                  Upload Notes
                </button>

                <button
                  className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
                >
                  Upload Tests
                </button>

                <button
                  className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                >
                  Edit Profile
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}