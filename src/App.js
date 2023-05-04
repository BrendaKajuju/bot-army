import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import BotCollection from './components/BotCollection';

function App() {
  return (
    <NextUIProvider>
    <div className="App">
      <Nav />  
    < BotCollection />
    </div>
    </NextUIProvider>
  );
}

export default App;
