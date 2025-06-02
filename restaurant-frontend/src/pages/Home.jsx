import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItemCard from '../components/MenuItemCard';

function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get('http://localhost:5000/api/menu');
      setMenu(res.data);
    };
    fetchMenu();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🍽️ Menu</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item} showAddButton={false} />
        ))}
      </div>
    </div>
  );
}

export default Home;
