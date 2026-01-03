const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">
          MU Housing
        </h1>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a className="hover:text-blue-600" href="#">Home</a>
          <a className="hover:text-blue-600" href="#">Listings</a>
          <a className="hover:text-blue-600" href="#">For Landlords</a>
          <a className="hover:text-blue-600" href="#">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
