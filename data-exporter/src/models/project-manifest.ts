

export type ProjectManifestLink = {
  name: string,
  href: string
};

export type ProjectManifest = {
  name: string,
  slug?: string,
  images?: {
    thumbnails: string[],
    images: string[]
  },
  description: string,
  tags: string[],
  links: ProjectManifestLink[],
  pathToBody: string
};
