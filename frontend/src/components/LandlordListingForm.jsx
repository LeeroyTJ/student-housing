import { useState } from "react"

export default function LandlordListingForm({ onClose }) {
  const [title, setTitle] = useState("")
  const [type, setType] = useState("Bedsitter")
  const [price, setPrice] = useState("")
  const [status, setStatus] = useState("Available")
  const [imageUrl, setImageUrl] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const token = localStorage.getItem("token")

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude)
      setLng(pos.coords.longitude)
    })
  }

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, type, price, status, imageUrl, lat, lng }),
    })
    if (res.ok) {
      alert("Listing added!")
      onClose()
    } else alert("Failed to add listing")
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Add New Listing</h3>
      <input
        placeholder="Title"
        className="w-full mb-2 border px-3 py-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className="w-full mb-2 border px-3 py-2 rounded" value={type} onChange={(e) => setType(e.target.value)}>
        <option>Bedsitter</option>
        <option>Single Room</option>
        <option>Shared</option>
      </select>
      <input
        type="number"
        placeholder="Price"
        className="w-full mb-2 border px-3 py-2 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select className="w-full mb-2 border px-3 py-2 rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Available</option>
        <option>Full</option>
      </select>
      <input
        placeholder="Image URL"
        className="w-full mb-2 border px-3 py-2 rounded"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="flex gap-2 mb-2">
        <button
          onClick={handleUseCurrentLocation}
          className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
        >
          Use My Location
        </button>
        <span>{lat && lng ? `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}` : ""}</span>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save
      </button>
      <button onClick={onClose} className="ml-2 px-4 py-2 rounded border">Cancel</button>
    </div>
  )
}
