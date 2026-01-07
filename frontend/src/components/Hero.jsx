export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Safe & Verified Student Housing Near Campus
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          UniHomes helps Mulungushi University students find trusted boarding houses
          without scams, stress, or wasted time.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
            Find Housing
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600">
            List Your Property
          </button>
        </div>
      </div>
    </section>
  )
}
