import { PortfolioProject } from "./portfolio-project";

export type ImageSource = string | { thumbnails: string[], images: string[] };

export class Project {
  constructor(
    private _name: string,
    _images: ImageSource | null,
    private _desc: string,
    private _technologies: string[],
    private _links: [string, string][],
    private _fullDesc: string = ''
  ) {
    this._slug = this._name.split(/[^a-zA-Z0-9]/).filter(Boolean).join('-').toLowerCase();

    if (!_images) _images = { thumbnails: [], images: [] };
    else if (typeof _images === 'string') _images = { thumbnails: [_images], images: [_images] };
    [this._thumbnails, this._images] = [_images.thumbnails, _images.images];
  }

  private _slug: string;

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

  toPortfolioProject(): PortfolioProject {
    let images: { Image?: string, Thumbnail?: string }[] = [];
    for (let q = 0; q < Math.max(this.images.length, this.thumbnails.length); q++) {
      let img = q < this.images.length ? this.images[q] : undefined;
      let thumb = q < this.thumbnails.length ? this.thumbnails[q] : undefined;
      let entry = { Image: img, Thumbnail: thumb };
      images.push(entry);
    }
    return {
      Slug: this.slug,
      Name: this.name,
      Description: this.description,
      Tags: new Set(this.technologies),
      Body: this.fullDescription,
      Links: this.links.map(([name, href]) => ({ Name: name, Href: href })),
      Images: images
    };
  }
}
