import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard"
import listings from "../data/listings"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />      
      <Hero />
      <SearchBar />
      <Stats />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Available Near Campus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Footer />
    </div>
  );
};