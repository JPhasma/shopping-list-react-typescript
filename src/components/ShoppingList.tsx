import React from 'react';

export default function ShoppingList(): JSX.Element {
  const items = [
    { id: 1, productName: 'Lemon', quantity: 3 },
    { id: 2, productName: 'Vegan Beef Pasties', quantity: 30 },
  ];

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.productName} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
