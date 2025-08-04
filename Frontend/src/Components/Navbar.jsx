import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 w-[100%] fixed top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* Hamburger menu icon (only visible on mobile) */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-blue-500">Donor Dashboard</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg">
          <li><a href="#" className="block hover:text-blue-500">Home</a></li>
          <li><a href="#" className="block hover:text-blue-500">About</a></li>
          <li><a href="#" className="block hover:text-blue-500">Services</a></li>
          <li><a href="#" className="block hover:text-blue-500">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
