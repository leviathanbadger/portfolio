

export type Project = {
  slug: string,
  name: string,
  images: {
    thumbnail?: string,
    href?: string
  }[],
  description: string,
  tags: string[],
  links: {
    name: string,
    href: string
  }[],
  body: string
};
