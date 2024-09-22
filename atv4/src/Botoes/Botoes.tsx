import React from 'react';

type BotoesProps = {
  setProduto: Function;
  children: string;
};

function Botoes({ setProduto, children }: BotoesProps) {
  return (
    <button
      key={children}
      onClick={() => {
        setProduto(children);
      }}
      style={{ margin: '0.5em' }}
    >
      {children}
    </button>
  );
}

export default Botoes;
