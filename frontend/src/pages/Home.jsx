import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import Stats from "../components/Stats"
import HowItWorks from "../components/HowItWorks"
import ListingCard from "../components/ListingCard"
import listings from "../data/listings"
import Footer from "../components/Footer"
import { calculateDistance } from "../utils/calculateDistance"

const CAMPUS_COORDS = {
  lat: -14.29560398849453,
  lng: 28.55537444595862
}

export default function Home() {
  const [maxPrice, setMaxPrice] = useState("")
  const [type, setType] = useState("")
  const [maxDistance, setMaxDistance] = useState("")

  const filteredListings = listings.filter(listing => {
    const distance = calculateDistance(
      CAMPUS_COORDS.lat,
      CAMPUS_COORDS.lng,
      listing.lat,
      listing.lng
    )

    return (
      (!maxPrice || listing.price <= maxPrice) &&
      (!type || listing.type === type) &&
      (!maxDistance || distance <= maxDistance)
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />

      <Stats />
      <HowItWorks />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Student Housing Near Mulungushi Main Campus
          </h2>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            <input
              type="number"
              placeholder="Max rent (ZMW)"
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

            <select
              className="border px-4 py-2 rounded"
              onChange={e => setMaxDistance(e.target.value)}
            >
              <option value="">Any Distance</option>
              <option value="0.3">Within 300m</option>
              <option value="0.5">Within 500m</option>
              <option value="1">Within 1 km</option>
            </select>
          </div>

          {/* LISTINGS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {filteredListings.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No houses match your filters.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
