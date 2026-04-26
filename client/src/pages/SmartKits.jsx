import React from 'react';

const SmartKits = () => {
  const kits = [
    { id: 1, name: "Morning Tea Kit", items: "Milk, Sugar, Tea Powder", price: 150, icon: "☕" },
    { id: 2, name: "Quick Breakfast", items: "Bread, Eggs, Butter", price: 220, icon: "🍳" },
    { id: 3, name: "Snack Combo", items: "Chips, Juice, Biscuits", price: 130, icon: "🧃" }
  ];

  return (
    <div className='mb-8'>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-3">
        ✨ Binkeyit Smart Kits
      </h2>
      <div className='flex gap-4 overflow-x-auto pb-4 no-scrollbar'>
        {kits.map((kit) => (
          <div 
            key={kit.id} 
            className='min-w-[200px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all'
          >
            <div className='text-4xl mb-3'>{kit.icon}</div>
            <h3 className='font-bold text-gray-800'>{kit.name}</h3>
            <p className='text-xs text-gray-500 my-2'>{kit.items}</p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-green-600 font-bold'>₹{kit.price}</span>
              <button className='bg-green-600 text-white text-xs px-4 py-1.5 rounded-full hover:bg-green-700 transition-colors'>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartKits;
