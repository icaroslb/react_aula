import React from 'react';

type GlobalContextProps = {
  produtos: [DadosProps] | null;
  setProdutos: Function;
  BuscarDados: Function;
  LimparDados: Function;
};

type GlobalStorageProps = {
  children: [React.ReactNode] | React.ReactNode | null;
};

export type DadosFotosProps = {
  titulo: string;
  src: string;
};

export type DadosProps = {
  id: string;
  fotos: [DadosFotosProps];
  nome: string;
  preco: string;
  descricao: string;
  vendido: boolean;
  usuario_id: string;
};

export const GlobalContext = React.createContext<GlobalContextProps | null>(
  null,
);

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [produtos, setProdutos] = React.useState<[DadosProps] | null>(null);

  const BuscarDados = async () => {
    const pagina = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/',
    );
    setProdutos(await pagina.json());
  };

  const LimparDados = () => {
    setProdutos(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        BuscarDados,
        LimparDados,
        produtos,
        setProdutos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
