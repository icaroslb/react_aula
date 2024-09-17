import Head from '../head/Head';

export type PageProps = { pageName: string; children: React.ReactNode };

export function Page({ pageName, children }: PageProps) {
  return (
    <>
      <Head />
      <h1 style={{ color: '#00ff00' }}>{pageName}</h1>
      {children}
    </>
  );
}
