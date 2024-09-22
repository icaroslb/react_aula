import React from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const Buttons = () => {
  const global = React.useContext(GlobalContext);

  return global !== null ? (
    <>
      <button onClick={() => global.BuscarDados()}>Buscar</button>
      <button onClick={() => global.LimparDados()}>Limpar</button>
    </>
  ) : (
    <h1>Erro no sistema!</h1>
  );
};

export default Buttons;
