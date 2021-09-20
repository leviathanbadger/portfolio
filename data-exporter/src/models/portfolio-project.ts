

export type PortfolioProject = {
  Slug: string,
  Name: string,
  Images: {
    Thumbnail?: string,
    Href?: string
  }[],
  Description: string,
  Tags: Set<string>,
  Links: {
    Name: string,
    Href: string
  }[],
  Body: string
};
