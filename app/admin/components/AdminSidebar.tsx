import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-pink-600 mb-6">
        Admin Menu
      </h2>

      <div className="flex flex-col gap-5">

        <Link
          href="/admin/dashboard"
          className="text-gray-800 hover:text-pink-600"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/admin/notes"
          className="text-gray-800 hover:text-pink-600"
        >
          📚 Notes
        </Link>

        <Link
          href="/admin/tests"
          className="text-gray-800 hover:text-pink-600"
        >
          📝 Tests
        </Link>

        <Link
          href="/admin/profile"
          className="text-gray-800 hover:text-pink-600"
        >
          👤 Profile
        </Link>

      </div>
    </aside>
  );
}