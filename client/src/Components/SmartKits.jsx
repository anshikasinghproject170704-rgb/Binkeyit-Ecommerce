import React from 'react';

const SmartKits = () => {
  const kits = [
    { id: 1, name: "Morning Tea Kit", icon: "☕", price: 150, items: "Milk + Sugar + Tea" },
    { id: 2, name: "Breakfast Kit", icon: "🍳", price: 220, items: "Bread + Eggs + Butter" }
  ];

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-xl font-bold mb-4 text-green-700">✨ Binkeyit Smart Kits</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {kits.map((kit) => (
          <div key={kit.id} className="min-w-[200px] bg-white border border-green-100 rounded-2xl p-4 shadow-sm">
            <div className="text-4xl mb-3">{kit.icon}</div>
            <h3 className="font-bold text-gray-800">{kit.name}</h3>
            <p className="text-xs text-gray-500 mb-4">{kit.items}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-green-600">₹{kit.price}</span>
              <button className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartKits;
