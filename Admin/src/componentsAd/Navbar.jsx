import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/admin" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="/admin/all-sellers" className="hover:text-gray-300">All Sellers</Link></li>
        <li><Link to="/admin/all-buyers" className="hover:text-gray-300">All Buyers</Link></li>
        <li><Link to="/admin/all-products" className="hover:text-gray-300">All Products</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
