import { useParams } from "react-router-dom"
import listings from "../data/listings"

export default function ListingDetails() {
  const { id } = useParams()
  const listing = listings.find(l => l.id === Number(id))

  if (!listing) {
    return <p className="p-6">Listing not found.</p>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">
        {listing.title}
      </h1>

      <p className="text-gray-600 mb-4">
        {listing.location}
      </p>

      <p className="text-xl text-blue-600 font-semibold mb-6">
        ZMW {listing.price} / month
      </p>

      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Room Type: {listing.type}</li>
          <li>Verified landlord</li>
          <li>Near Mulungushi University</li>
        </ul>
      </div>
    </div>
  )
}
