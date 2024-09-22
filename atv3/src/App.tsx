import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Buttons from './Buttons/Buttons';
import Data from './Data/Data';

function App() {
  const [json, setJson] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  return (
    <>
      <Buttons
        url="https://ranekapi.origamid.dev/json/api/produto/tablet"
        setJson={setJson}
        setCarregando={setCarregando}
      >
        Tablet
      </Buttons>
      <Buttons
        url="https://ranekapi.origamid.dev/json/api/produto/smartphone"
        setJson={setJson}
        setCarregando={setCarregando}
      >
        Smartphone
      </Buttons>
      <Buttons
        url="https://ranekapi.origamid.dev/json/api/produto/notebook"
        setJson={setJson}
        setCarregando={setCarregando}
      >
        Notebook
      </Buttons>

      {carregando ? (
        <h2>Carregando...</h2>
      ) : (
        json != null && <Data json={json} />
      )}
    </>
  );
}

export default App;
