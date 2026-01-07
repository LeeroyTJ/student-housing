export default function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <input
          type="text"
          placeholder="Location (e.g. Near Main Campus)"
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Max Rent (ZMW)"
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Room Type</option>
          <option>Single Room</option>
          <option>Shared Room</option>
          <option>Bedsitter</option>
        </select>

        <button className="bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700">
          Search
        </button>

      </div>
    </div>
  )
}
