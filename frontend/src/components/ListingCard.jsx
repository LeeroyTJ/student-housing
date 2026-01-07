export default function ListingCard({ listing }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      
      <div className="h-48 bg-gray-200">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">
          {listing.title}
        </h3>

        <p className="text-gray-500 text-sm mb-2">
          {listing.location}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            ZMW {listing.price}/month
          </span>

          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
            {listing.type}
          </span>
        </div>
      </div>
    </div>
  )
}
