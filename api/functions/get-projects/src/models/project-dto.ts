import { Project } from './project';

export type ProjectDto = {
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

export function convertToProjectDto(proj: Project): ProjectDto {
  return {
    slug: proj.Slug,
    name: proj.Name,
    images: proj.Images.map(img => ({
      thumbnail: img.Thumbnail,
      href: img.Href
    })),
    description: proj.Description,
    tags: [...proj.Tags],
    links: proj.Links.map(link => ({
      name: link.Name,
      href: link.Href
    })),
    body: proj.Body
  };
}
