import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-5 mb-8">
      <h1 className="text-2xl font-bold text-pink-600">
        Mission90 Admin
      </h1>

      <div className="flex gap-8 font-medium">
        <Link
          href="/admin/dashboard"
          className="text-gray-800 hover:text-pink-600"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/notes"
          className="text-gray-800 hover:text-pink-600"
        >
          Notes
        </Link>

        <Link
          href="/admin/tests"
          className="text-gray-800 hover:text-pink-600"
        >
          Tests
        </Link>

        <Link
          href="/admin/profile"
          className="text-gray-800 hover:text-pink-600"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}