import React from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';

import './App.css';

function App() {
  const items = [
    { id: 1, productName: 'Lemon', quantity: 3 },
    { id: 2, productName: 'Vegan Beef Pasties', quantity: 30 },
  ];

  return (
    <div className='App'>
      <h1>Hello Earth</h1>
      <Greeter person='Darius' />
      <Greeter person='Crixus' />
      <Greeter person='Ilithyia' />

      <ShoppingList items={items} />
    </div>
  );
}

export default App;
