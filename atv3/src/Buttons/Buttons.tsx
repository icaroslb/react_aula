import React from 'react';

type ButtonsPros = {
  url: string;
  setJson: Function;
  setCarregando: Function;
  children: React.ReactNode;
};

function Buttons({ url, setJson, setCarregando, children }: ButtonsPros) {
  return (
    <button
      onClick={async () => {
        setCarregando(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(url);
        const json = await response.json();

        setJson(json);
        setCarregando(false);
      }}
      style={{ margin: '.5em' }}
    >
      {children}
    </button>
  );
}

export default Buttons;
