import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItemCard from '../components/MenuItemCard';

function Orders() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get('http://localhost:5000/api/menu');
      setMenu(res.data);
    };
    fetchMenu();
  }, []);

  const handleAddToCart = (item) => {
    const existing = cart.find(i => i._id === item._id);
    if (existing) {
      setCart(cart.map(i =>
        i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const placeOrder = async () => {
    if (cart.length === 0) return;

    try {
      await axios.post('http://localhost:5000/api/orders', {
        items: cart.map(i => ({
          name: i.name,
          quantity: i.quantity
        })),
        status: 'Placed'
      });
      setCart([]);
      alert('Order placed!');
    } catch (err) {
      console.error(err);
      alert('Failed to place order');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Place Your Order</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {menu.map((item) => (
          <MenuItemCard
            key={item._id}
            item={item}
            showAddButton={true}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">🧾 Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="list-disc ml-5">
            {cart.map((item) => (
              <li key={item._id}>
                {item.quantity}x {item.name}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={placeOrder}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Orders;
