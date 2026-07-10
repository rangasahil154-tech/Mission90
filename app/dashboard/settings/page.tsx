export default function Settings() {
  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600">
        ⚙️ Settings
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 max-w-2xl">

        <div className="mb-6">
          <label className="text-gray-900">
            Student Name
          </label>
          <input
  type="text"
  value="Nishtha"
  readOnly
  className="w-full border rounded-xl p-3 text-gray-900"
/>
        </div>

        <div className="mb-6">
          <label className="text-gray-900">
            Target Percentage
          </label>
          <input
  type="number"
  value="90"
  readOnly
  className="w-full border rounded-xl p-3 text-gray-900"
/>
        </div>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700">
          Save Changes
        </button>

      </div>
    </main>
  );
}