import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
        <Link to="/admin/menu" className="bg-blue-500 text-white p-4 rounded-xl shadow hover:bg-blue-600">
          Manage Menu
        </Link>
        <Link to="/admin/orders" className="bg-green-500 text-white p-4 rounded-xl shadow hover:bg-green-600">
          Manage Orders
        </Link>
        <Link to="/admin/analytics" className="bg-purple-500 text-white p-4 rounded-xl shadow hover:bg-purple-600">
          View Analytics
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
