import React, { useState } from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';

import Item from './models/item';

import './App.css';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    console.log('MADE IT');
    console.log(product);
  };

  // const items = [
  //   { id: 1, productName: 'Lemon', quantity: 3 },
  //   { id: 2, productName: 'Vegan Beef Pasties', quantity: 30 },
  // ];

  return (
    <div className='App'>
      <h1>Hello Earth</h1>
      <ShoppingListForm onAddItem={addItem} />
      <Greeter person='Darius' />
      <Greeter person='Crixus' />
      <Greeter person='Ilithyia' />

      <ShoppingList items={items} />
    </div>
  );
}

export default App;
