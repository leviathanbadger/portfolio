

export type ImageSource = string | { thumbnails: string[], images: string[] };

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

export class ManagedProject {
  constructor(
    private _slug: string,
    private _name: string,
    _images: ImageSource | null,
    private _desc: string,
    private _technologies: string[],
    private _links: (readonly [string, string])[],
    private _fullDesc: string = ''
  ) {
    if (!_images) _images = { thumbnails: [], images: [] };
    else if (typeof _images === 'string') _images = { thumbnails: [_images], images: [_images] };
    [this._thumbnails, this._images] = [_images.thumbnails, _images.images];
  }

  get name() {
    return this._name;
  }
  get slug() {
    return this._slug;
  }
  get description() {
    return this._desc;
  }
  get technologies() {
    return this._technologies;
  }
  get links() {
    return this._links;
  }

  get fullDescription() {
    return this._fullDesc;
  }

  private _thumbnails: string[];
  get thumbnails() {
    return this._thumbnails;
  }
  private _images: string[];
  get images() {
    return this._images;
  }

  static fromProject(proj: Project): ManagedProject {
    const allImages = proj.images || [];
    let imageHrefs = allImages.map(img => img.href!).filter(Boolean);
    let thumbnails = proj.images.map(img => img.thumbnail!).filter(Boolean);
    let links = proj.links.map(link => [link.name, link.href] as const);
    return new ManagedProject(proj.slug, proj.name, { images: imageHrefs, thumbnails }, proj.description, proj.tags || [], links || [], proj.body);
  }

  matchFilter(filter: string): { project: ManagedProject, relevance: number } {
    filter = filter.toLowerCase();
    let terms = filter.split(' ');
    let searchName = this.name.toLowerCase();
    let searchDesc = this.description.toLowerCase();
    let searchTechs = this.technologies.map(tech => tech.toLowerCase().trim());
    let matchCount = 0;
    for (let term of terms) {
      let isMatch = searchName.indexOf(term) !== -1 || searchDesc.indexOf(term) !== -1 || searchTechs.some(tech => tech.indexOf(term) !== -1);
      if (isMatch) matchCount++;
    }
    matchCount /= terms.length;
    matchCount *= matchCount;
    return { project: this, relevance: matchCount };
  }
}
