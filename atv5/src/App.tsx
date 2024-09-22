import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { GlobalStorage } from './GlobalContext/GlobalContext';
import Buttons from './Buttons/Buttons';
import Produtos from './Produtos/Produtos';

function App() {
  return (
    <GlobalStorage>
      <Buttons />
      <Produtos />
    </GlobalStorage>
  );
}

export default App;
