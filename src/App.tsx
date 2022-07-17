import React from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello Earth</h1>
      <Greeter person='Darius' />
      <Greeter person='Crixus' />
      <Greeter person='Ilithyia' />
      <ShoppingList />
    </div>
  );
}

export default App;
