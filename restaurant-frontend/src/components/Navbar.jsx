import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between">
      <h1 className="text-xl font-bold">🍽️ Restaurant System</h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:text-blue-500">Menu</NavLink>
        <NavLink to="/orders" className="hover:text-blue-500">Orders</NavLink>
        <NavLink to="/admin" className="hover:text-blue-500">Admin</NavLink>
        <NavLink to="/analytics" className="hover:text-blue-500">Analytics</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
