export default function Progress() {
  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600">
        📈 Progress
      </h1>

      <div className="mt-8 space-y-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">English</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div className="bg-pink-500 h-4 rounded-full w-4/5"></div>
          </div>
          <p className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">80%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">Hindi</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div className="bg-pink-500 h-4 rounded-full w-3/4"></div>
          </div>
          <p className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">75%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">Economics</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div className="bg-pink-500 h-4 rounded-full w-2/3"></div>
          </div>
          <p className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">70%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">Political Science</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div className="bg-pink-500 h-4 rounded-full w-5/6"></div>
          </div>
          <p className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">85%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">Fine Arts</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div className="bg-pink-500 h-4 rounded-full w-full"></div>
          </div>
          <p className="w-full border rounded-xl p-3 text-gray-900 placeholder:text-gray-500">100%</p>
        </div>

      </div>
    </main>
  );
}