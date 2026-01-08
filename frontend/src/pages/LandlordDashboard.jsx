import { useEffect, useState } from "react"
import LandlordListingCard from "../components/LandlordListingCard"
import LandlordListingForm from "../components/LandlordListingForm"

export default function LandlordDashboard() {
  const [listings, setListings] = useState([])
  const [showForm, setShowForm] = useState(false)
  const token = localStorage.getItem("token")

  const fetchListings = async () => {
    const res = await fetch("http://localhost:8080/api/listings/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (res.ok) {
      const data = await res.json()
      setListings(data)
    }
  }

  useEffect(() => {
    fetchListings()
  }, [])

  const handleAddNew = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">My Listings</h2>
      <button
        onClick={handleAddNew}
        className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Add New Listing
      </button>

      {showForm && <LandlordListingForm onClose={handleCloseForm} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <LandlordListingCard key={listing.id} listing={listing} refresh={fetchListings} />
        ))}
      </div>
    </div>
  )
}
