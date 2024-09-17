type produtoProps = { nome: string; propriedades: Array<string> };

function Produto({ nome, propriedades }: produtoProps) {
  return (
    <div
      key={`${nome}${propriedades}`}
      style={{
        borderStyle: 'solid',
        borderRadius: '1rem 0',
        margin: '1rem 0',
        padding: '1rem',
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;
