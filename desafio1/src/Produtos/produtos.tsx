import { Page } from '../pages/Page';
import Produto from './produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function Produtos() {
  return (
    <Page pageName="Produtos">
      {produtos.map((produto) => (
        <Produto {...produto}></Produto>
      ))}
    </Page>
  );
}

export default Produtos;
