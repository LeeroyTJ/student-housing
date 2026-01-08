export default function LandlordListingCard({ listing, refresh }) {
  const token = localStorage.getItem("token")

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this listing?")) return

    const res = await fetch(`http://localhost:8080/api/listings/${listing.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) refresh()
    else alert("Delete failed")
  }

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={listing.imageUrl} alt={listing.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{listing.title}</h3>
        <p className="text-gray-600">Type: {listing.type}</p>
        <p className="text-indigo-600 font-semibold">ZMW {listing.price}</p>
        <p className="text-gray-500 mt-1">Status: {listing.status}</p>
        <div className="flex gap-2 mt-3">
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
