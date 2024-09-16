import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Produtos from './produtos/produtos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Produtos />
    </>
  );
}

export default App;
