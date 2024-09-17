export type LinkProps = {
  url: string;
  children: string;
};

export function Link({ url, children }: LinkProps) {
  return <a href={url}>{children}</a>;
}
