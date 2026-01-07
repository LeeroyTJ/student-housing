import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import Stats from "../components/Stats" // optional
import HowItWorks from "../components/HowItWorks" // optional
import ListingCard from "../components/ListingCard"
import listings from "../data/listings"
import Footer from "../components/Footer"

export default function Home() {
  // --- FILTER STATE ---
  const [maxPrice, setMaxPrice] = useState("")
  const [type, setType] = useState("")

  // --- FILTERED LISTINGS ---
  const filteredListings = listings.filter(l => {
    return (
      (!maxPrice || l.price <= maxPrice) &&
      (!type || l.type === type)
    )
  })

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO + SEARCH */}
      <Hero />
      <SearchBar />

      {/* OPTIONAL STATS / HOW IT WORKS */}
      <Stats />
      <HowItWorks />

      {/* FILTER UI + LISTINGS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Available Near Campus
          </h2>

          {/* FILTERS */}
          <div className="flex gap-4 mb-8 justify-center">
            <input
              type="number"
              placeholder="Max price"
              className="border px-4 py-2 rounded"
              onChange={e => setMaxPrice(e.target.value)}
            />

            <select
              className="border px-4 py-2 rounded"
              onChange={e => setType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Bedsitter">Bedsitter</option>
              <option value="Single Room">Single Room</option>
              <option value="Shared">Shared</option>
            </select>
          </div>

          {/* LISTINGS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}
