import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const hardcodedData = [
  { name: 'Butter Chicken', totalOrders: 8 },
  { name: 'Veg Biryani', totalOrders: 5 },
  { name: 'Gulab Jamun', totalOrders: 4 },
  { name: 'Paneer Butter Masala', totalOrders: 6 },
  { name: 'Tandoori Chicken', totalOrders: 7 },
  { name: 'Dhokla', totalOrders: 3 },
  { name: 'Rajma Chawal', totalOrders: 4 },
  { name: 'Samosa', totalOrders: 6 },
  { name: 'Masala Dosa', totalOrders: 5 },
  { name: 'Chole Bhature', totalOrders: 3 },
  { name: 'Rasgulla', totalOrders: 4 },
  { name: 'Fish Curry', totalOrders: 6 },
  { name: 'Kadai Paneer', totalOrders: 5 },
  { name: 'Rogan Josh', totalOrders: 4 },
  { name: 'Malai Kofta', totalOrders: 2 },
  { name: 'Aloo Paratha', totalOrders: 5 },
  { name: 'Kheer', totalOrders: 3 },
  { name: 'Idli Sambhar', totalOrders: 6 },
  { name: 'Hyderabadi Biryani', totalOrders: 7 },
  { name: 'Pav Bhaji', totalOrders: 4 },
  { name: 'Mysore Masala Dosa', totalOrders: 3 },
  { name: 'Pani Puri', totalOrders: 4 },
  { name: 'Vada Pav', totalOrders: 5 }
];

function Analytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Analytics Dashboard</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={hardcodedData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={80} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="totalOrders" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Analytics;
