import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          UniHomes
        </Link>


        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            Find Housing
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            How it Works
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
            List Property
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  )
}
