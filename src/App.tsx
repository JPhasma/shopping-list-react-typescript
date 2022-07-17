import React from 'react';
import Greeter from './components/Greeter';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello Earth</h1>
      <Greeter person='Darius' />
      <Greeter person='Crixus' />
      <Greeter person='Ilithyia' />
    </div>
  );
}

export default App;
