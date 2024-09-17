import Page404 from './404/404';
import './App.css';
import Home from './Home/Home';
import Produtos from './Produtos/produtos';

function App() {
  const { pathname } = window.location;
  let Pagina;

  switch (pathname) {
    case '/':
      Pagina = Home;
      break;
    case '/Produtos':
      Pagina = Produtos;
      break;
    default:
      Pagina = Page404;
      break;
  }

  return <Pagina />;
}

export default App;
