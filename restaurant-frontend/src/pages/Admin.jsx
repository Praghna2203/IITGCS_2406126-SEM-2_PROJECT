import React, { useState } from 'react';
import MenuManager from '../admin/MenuManager';
import OrderManager from '../admin/OrderManager';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div className="p-4">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'menu' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('menu')}
        >
          Menu Manager
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('orders')}
        >
          Order Manager
        </button>
      </div>

      {activeTab === 'menu' ? <MenuManager /> : <OrderManager />}
    </div>
  );
}
