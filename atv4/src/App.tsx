import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Botoes from './Botoes/Botoes';
import Json from './Json/Json';

function App() {
  const [produto, setproduto] = React.useState<string | null>(null);
  const [json, setJson] = React.useState(null);

  React.useEffect(() => {
    const produto_local = localStorage.getItem('produto');

    if (produto_local != null) {
      setproduto(produto_local);
    }
  }, []);

  React.useEffect(() => {
    if (produto != null) {
      localStorage.setItem('produto', produto);
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`).then(
        (response) => response.json().then((json) => setJson(json)),
      );
    }
  }, [produto]);

  return (
    <>
      {produto != null && <h1>Preferência: {produto}</h1>}
      <Botoes setProduto={setproduto}>notebook</Botoes>
      <Botoes setProduto={setproduto}>smartphone</Botoes>
      {json != null && <Json data={json} />}
    </>
  );
}

export default App;
