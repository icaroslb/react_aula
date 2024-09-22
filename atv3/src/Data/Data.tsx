import React from 'react';

type JsonType = {
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

type DataProps = { json: JsonType };

function Data({ json }: DataProps) {
  return (
    <div key={json.id}>
      <h1>{json.nome}</h1>
      <p>Preco: R${json.preco}</p>
      <p>Descrição: {json.descricao}</p>
      <p>Vendido: {json.vendido ? 'Vendido' : 'Disponível'}</p>
      <p>Usuário: {json.usuario_id}</p>
      {json.fotos.map((foto) => (
        <div key={`${foto.titulo}${foto.src}`}>
          <h2>{foto.titulo}</h2>
          <img src={foto.src}></img>
        </div>
      ))}
    </div>
  );
}

export default Data;
