const TrustBadges = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
          <p className="text-gray-600 text-sm">
            Every landlord is reviewed before posting.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">No Scams</h3>
          <p className="text-gray-600 text-sm">
            Report suspicious listings instantly.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Built for MU Students</h3>
          <p className="text-gray-600 text-sm">
            Designed specifically for Mulungushi University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
