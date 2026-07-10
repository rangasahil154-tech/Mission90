import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center p-8">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>

          <h1 className="text-6xl font-extrabold text-pink-600 leading-tight">
            Mission90+
          </h1>

          <p className="mt-6 text-2xl font-semibold text-gray-800">
            Study Smarter. Score Higher.
          </p>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            One platform for Notes, Tests, Tasks, AI Study Assistant,
            Progress Tracking and everything a student needs to
            achieve 90%+.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              href="/login"
              className="bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-700 transition"
            >
              👨‍🎓 Student Login
            </Link>

            <Link
              href="/admin/login"
              className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              👨‍💼 Admin Panel
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-3xl font-bold text-pink-600 mb-8">
            🚀 Features
          </h2>

          <div className="space-y-5 text-lg">

            <div className="text-gray-900 font-medium">📚 Subject-wise Notes</div>

<div className="text-gray-900 font-medium">📝 Weekly Tests</div>

<div className="text-gray-900 font-medium">✅ Daily Tasks</div>

<div className="text-gray-900 font-medium">📈 Progress Tracking</div>

<div className="text-gray-900 font-medium">👤 Student Profile</div>

<div className="text-gray-900 font-medium">🤖 AI Study Assistant</div>

          </div>

        </div>

      </div>

      <footer className="absolute bottom-5 text-gray-500 text-sm">
        Mission90 v1.0 • Made with ❤️ by Nishant Ranga
      </footer>

    </main>
  );
}