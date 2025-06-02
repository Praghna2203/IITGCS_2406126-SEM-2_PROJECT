import React from 'react';

function MenuItemCard({ item, onAddToCart, showAddButton = false }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.category}</p>
      <p className="text-sm">₹{item.price}</p>
      <p className="text-xs text-gray-500 mt-1">{item.tags?.join(', ')}</p>

      {showAddButton && (
        <button
          onClick={() => onAddToCart(item)}
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default MenuItemCard;
