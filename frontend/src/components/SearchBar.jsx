const SearchBar = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Location (e.g. Great North Road)"
        className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Max Price (ZMW)"
        className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
