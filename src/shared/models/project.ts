

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

  matchFilter(filter: string): { project: Project, relevance: number } {
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
