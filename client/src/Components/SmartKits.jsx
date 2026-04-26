import React from 'react';

const SmartKits = () => {
  // Data for the kits
  const kits = [
    { 
      id: 1, 
      name: "Morning Tea Kit", 
      icon: "☕", 
      price: 150, 
      items: "Milk + Sugar + Tea Powder" 
    },
    { 
      id: 2, 
      name: "Quick Breakfast Kit", 
      icon: "🍳", 
      price: 220, 
      items: "Bread + Eggs + Butter" 
    },
    { 
      id: 3, 
      name: "Snack Combo", 
      icon: "🍿", 
      price: 180, 
      items: "Chips + Cold Drink + Dip" 
    }
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center">
        <span className="mr-2">✨</span> Binkeyit Smart Kits
      </h2>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {kits.map((kit) => (
          <div 
            key={kit.id} 
            className="min-w-[220px] bg-white border border-green-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="text-4xl mb-3">{kit.icon}</div>
            <h3 className="font-bold text-gray-800 text-sm">{kit.name}</h3>
            <p className="text-[10px] text-gray-500 mb-4">{kit.items}</p>
            
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-green-600">₹{kit.price}</span>
              <button className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                Add Kit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartKits;
