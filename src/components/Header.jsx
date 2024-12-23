import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ openModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold">
          <Link to="/" className="text-white">
            <img
              src="src/images/tourism logo.jpg"
              alt="Logo"
              className="w-10 h-10 filter brightness-200 bg-white p-0.5 rounded-full border-0.5 hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Search Bar with Logo */}
        <div className="flex-1 mx-8 relative pl-10">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md w-full pl-12 pr-10 text-black"
            value={searchQuery}
            onChange={handleSearch}
          />
          <img
            src="src/images/searchlogo.jpg"
            alt="Search Logo"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8"
          />
        </div>

        <nav className="flex mx-8 items-center space-x-9">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-purple-400"
            >
              Home
            </button>
            
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-lg">
                <Link
                  to="/home/general information"
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                 General Description
                </Link>
                <Link
                  to="/home/region"
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  Region
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-white hover:text-purple-400">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-purple-400">
            Destination
          </Link>
          <Link to="/services" className="text-white hover:text-purple-400">
            Accommodation
          </Link>
          <Link to="/services" className="text-white hover:text-purple-400">
            Attractions
          </Link>
          <Link to="/services" className="text-white hover:text-purple-400">
            Travel Tips
          </Link>
          <Link to="/contact" className="text-white hover:text-purple-400">
            Contact
          </Link>
          <button
            onClick={openModal}
            className="text-white hover:text-purple-400 px-4 py-2 border border-purple-500 rounded-md"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
