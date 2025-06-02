import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderManager = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Customer Orders</h2>
      {orders.map((order, index) => (
        <div key={order._id} className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-bold text-lg">Order #{index + 1}</h3>
          <p>Status: <span className="text-blue-500">{order.status}</span></p>
          <ul className="list-disc pl-6">
            {order.items.map((item, idx) => (
              <li key={idx}>{item.name} × {item.quantity}</li>
            ))}
          </ul>
          {order.notes && <p className="text-sm text-gray-600 mt-2">Note: {order.notes}</p>}
        </div>
      ))}
    </div>
  );
};

export default OrderManager;
