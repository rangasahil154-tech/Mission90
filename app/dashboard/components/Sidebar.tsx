import Link from "next/link";

export default function Sidebar() {
  return ( 
    <aside className="w-64 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-pink-600 mb-6">
        Menu
      </h2>

      <div className="flex flex-col gap-5">

        <Link
          href="/dashboard"
          className="text-gray-800 hover:text-pink-600"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/dashboard/subjects"
          className="text-gray-800 hover:text-pink-600"
        >
          📚 Subjects
        </Link>

        <Link 
          href="/dashboard/tests"
          className="text-gray-800 hover:text-pink-600"
        >
          📝 Tests
        </Link>

        <Link
  href="/dashboard/tasks"
  className="text-gray-800 hover:text-pink-600"
>
  ✅ Tasks
</Link>
        <Link
  href="/dashboard/progress"
  className="text-gray-800 hover:text-pink-600"
>
  📈 Progress
</Link>

<Link
  href="/dashboard/settings"
  className="text-gray-800 hover:text-pink-600"
>
  ⚙️ Settings
</Link>

      </div>
    </aside>
  );
}  