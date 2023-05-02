import React from 'react';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import BotCollection from './components/BotCollection';

function App() {
  return (
    <NextUIProvider>
    <div className="App">
    < BotCollection />
    </div>

    </NextUIProvider>

  );
}

export default App;
