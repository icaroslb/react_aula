import React from 'react';
import {
  DadosProps,
  GlobalContext,
  DadosFotosProps,
} from '../GlobalContext/GlobalContext';

const Produtos = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      {global !== null && global.produtos !== null ? (
        global.produtos.map((dados: DadosProps) => (
          <div key={dados.id} style={{ border: 'solid 1px', margin: '0.5em' }}>
            <h2>{dados.nome}</h2>
            <p>{dados.descricao}</p>
            <p>Situação: {dados.vendido ? 'Vendido' : 'Disponível'}</p>
            <p>Vendedor: {dados.usuario_id}</p>
            <h3>Fotos:</h3>
            <div>
              {dados.fotos.map((foto: DadosFotosProps) => (
                <img
                  key={foto.src}
                  src={foto.src}
                  alt={foto.titulo}
                  style={{
                    margin: '0.5em',
                    width: '25%',
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <h1>Produtos indisponíveis!</h1>
      )}
    </>
  );
};

export default Produtos;
