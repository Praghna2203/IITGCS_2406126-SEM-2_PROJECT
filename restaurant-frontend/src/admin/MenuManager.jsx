import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MenuManager() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Menu Items</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menuItems.map(item => (
          <li key={item._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p>₹{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
