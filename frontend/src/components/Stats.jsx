export default function Stats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-600">200+</h2>
          <p className="mt-2 text-gray-600">Verified Listings</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">1,500+</h2>
          <p className="mt-2 text-gray-600">Students Helped</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">0</h2>
          <p className="mt-2 text-gray-600">Scam Incidents</p>
        </div>
      </div>
    </section>
  )
}
