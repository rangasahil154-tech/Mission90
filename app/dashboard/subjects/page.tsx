export default function Subjects() {
  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-pink-600">
        📚 Subjects
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            English
          </h2>
          <p className="text-gray-600 mt-2">
            Flamingo + Vistas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Hindi
          </h2>
          <p className="text-gray-600 mt-2">
            Aroh + Vitan
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Economics
          </h2>
          <p className="text-gray-600 mt-2">
            Macro + IED
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Political Science
          </h2>
          <p className="text-gray-600 mt-2">
            Contemporary World Politics + Politics in India Since Independence
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Fine Arts
          </h2>
          <p className="text-gray-600 mt-2">
            Painting Theory & Practical
          </p>
        </div>

      </div>
    </main>
  );
}