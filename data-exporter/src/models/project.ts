import { readFile } from 'fs/promises';
import { PortfolioProject } from './portfolio-project.js';
import { ProjectManifest } from './project-manifest.js';

export type ImageSource = string | { thumbnails: string[], images: string[] };

export class Project {
  constructor(
    private _name: string,
    _slug: string | null,
    _images: ImageSource | null,
    private _desc: string,
    private _technologies: string[],
    private _links: [string, string][],
    private _fullDesc: string = ''
  ) {
    if (!_slug) {
      _slug = this._name.split(/[^a-zA-Z0-9]/).filter(Boolean).join('-').toLowerCase();
    }
    this._slug = _slug;

    if (!_images) _images = { thumbnails: [], images: [] };
    else if (typeof _images === 'string') _images = { thumbnails: [_images], images: [_images] };
    [this._thumbnails, this._images] = [_images.thumbnails, _images.images];
  }

  static async fromManifest(manifest: ProjectManifest): Promise<Project> {
    let fullDesc = (await readFile(manifest.pathToBody)).toString();
    return new Project(manifest.name, manifest.slug || null, manifest.images || null, manifest.description, manifest.tags, manifest.links.map(link => [link.name, link.href] as [string, string]), fullDesc);
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
    let images: { Href?: string, Thumbnail?: string }[] = [];
    for (let q = 0; q < Math.max(this.images.length, this.thumbnails.length); q++) {
      let href = q < this.images.length ? this.images[q] : undefined;
      let thumb = q < this.thumbnails.length ? this.thumbnails[q] : undefined;
      let entry = { Href: href, Thumbnail: thumb };
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
