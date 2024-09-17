import { Link, LinkProps } from '../links/Link';

const links: Array<LinkProps> = [
  { url: '/', children: 'Home' },
  { url: '/Produtos', children: 'Produtos' },
];

function Head() {
  return (
    <ul>
      {links.map((link) => (
        <li key={`${link.url}/${link.children}`}>
          <Link url={link.url}>{link.children}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Head;
