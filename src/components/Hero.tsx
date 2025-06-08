export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center text-center px-6">
      <img src={""} alt="Kodika logo" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold text-blue-500">KODIKA</h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300">
        Tu visión, nuestra misión
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
        Contáctanos
      </button>
    </section>
  );
}
