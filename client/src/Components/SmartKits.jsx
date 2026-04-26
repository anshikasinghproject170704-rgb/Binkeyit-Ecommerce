import React from 'react';

const SmartKits = () => {
  const kits = [
    { id: 1, name: "Morning Tea Kit", items: "Milk, Sugar, Tea Powder", price: 150, icon: "☕" },
    { id: 2, name: "Breakfast Kit", items: "Bread, Eggs, Butter", price: 220, icon: "🍳" },
    { id: 3, name: "Snack Combo", items: "Chips, Juice, Biscuits", price: 130, icon: "🍿" }
  ];

  return (
    <div style={{ margin: '20px 0', padding: '0 15px' }}>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#15803d', marginBottom: '15px' }}>
        ✨ Binkeyit Smart Kits
      </h2>
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
        {kits.map((kit) => (
          <div key={kit.id} style={{ minWidth: '180px', border: '1px solid #f0fdf4', borderRadius: '15px', padding: '15px', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{kit.icon}</div>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{kit.name}</h3>
            <p style={{ fontSize: '10px', color: '#6b7280', margin: '5px 0 15px' }}>{kit.items}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>₹{kit.price}</span>
              <button style={{ background: '#16a34a', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', fontSize: '10px' }}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartKits;
