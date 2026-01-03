import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find Trusted Student Housing Near <span className="text-blue-600">Mulungushi University</span>
        </h2>

        <p className="text-gray-600 mb-10">
          Verified listings. No scams. Safe housing for students.
        </p>

        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
