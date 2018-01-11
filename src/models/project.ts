

export class Project {
    constructor(
        private _name: string,
        private _desc: string,
        private _links: [string, string][]
    ) { }
    
    get name() {
        return this._name;
    }
    get description() {
        return this._desc;
    }
    get links() {
        return this._links;
    }
}
