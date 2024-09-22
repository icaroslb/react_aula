import React from 'react';

type JsonProps = {
  id: string;
  fotos: [
    {
      titulo: string;
      src: string;
    },
  ];
  nome: string;
  preco: string;
  descricao: string;
  vendido: boolean;
  usuario_id: string;
};

type DataProps = { data: JsonProps };

function Json({ data }: DataProps) {
  return (
    <div key={data.id}>
      <h2>{data.nome}</h2>
      <p>R${data.preco}</p>
    </div>
  );
}

export default Json;
