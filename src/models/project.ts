

export class Project {
    constructor(
        private _name: string,
        private _thumbnailSrc: string | null,
        private _desc: string,
        private _links: [string, string][]
    ) {
        this._slug = this._name.split(/[^a-zA-Z0-9]/).filter(Boolean).join('-').toLowerCase();
    }
    
    private _slug: string;
    
    get name() {
        return this._name;
    }
    get slug() {
        return this._slug;
    }
    get thumbnailSrc() {
        return this._thumbnailSrc || 'https://placehold.it/430x270';
    }
    get description() {
        return this._desc;
    }
    get links() {
        return this._links;
    }
    
    matchFilter(filter: string) {
        filter = filter.toLowerCase();
        return this.name.toLowerCase().indexOf(filter) !== -1 || this.description.toLowerCase().indexOf(filter) !== -1;
    }
}
