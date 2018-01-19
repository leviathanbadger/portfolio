

export class Project {
    constructor(
        private _name: string,
        private _thumbnailSrc: string | null,
        private _desc: string,
        private _technologies: string[],
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
    get technologies() {
        return this._technologies;
    }
    get links() {
        return this._links;
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
