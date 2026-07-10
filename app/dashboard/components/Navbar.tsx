import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-5 mb-8">
      <h1 className="text-2xl font-bold text-pink-600">
        Mission 90+
      </h1>

      <div className="flex gap-8 font-medium">
        <Link
          href="/dashboard"
          className="text-gray-800 hover:text-pink-600"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/subjects"
          className="text-gray-800 hover:text-pink-600"
        >
          Subjects
        </Link>

        <Link
  href="/dashboard/tests"
  className="text-gray-800 hover:text-pink-600"
>
  Tests
</Link>

<Link
  href="/dashboard/notes"
  className="text-gray-800 hover:text-pink-600"
>
  Notes
</Link>

<Link
  href="/dashboard/tasks"
  className="text-gray-800 hover:text-pink-600"
>
  Tasks
</Link>
<Link
  href="/dashboard/progress"
  className="text-gray-800 hover:text-pink-600"
>
  Progress
</Link>
      </div>
    </nav>
  );
}