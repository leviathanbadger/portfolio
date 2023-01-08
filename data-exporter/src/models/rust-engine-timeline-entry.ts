import { readFile } from 'fs/promises';
import { PortfolioRustEngineTimelineEntry } from './portfolio-rust-engine-timeline-entry.js';
import { RustEngineTimelineEntryManifest } from './rust-engine-timeline-entry-manifest.js';

export type EntryAsset = { type: 'image' | 'video', src: string, alt: string };

export class RustEngineTimelineEntry {
  constructor(
    private _id: number,
    private _name: string,
    private _desc: string,
    private _date: string,
    private _isBlooper: boolean,
    private _primaryScreenshot: string,
    assets: EntryAsset[],
    private _links: [string, string][],
    private _fullDesc: string = ''
  ) {
    this._assets = assets.map(asset => ({...asset}));
  }

  static async fromManifest(manifest: RustEngineTimelineEntryManifest): Promise<RustEngineTimelineEntry> {
    let fullDesc = manifest.body || (await readFile(manifest.pathToBody)).toString();
    let links = (manifest.links || []).map(link => [link.name, link.href] as [string, string]);
    return new RustEngineTimelineEntry(manifest.id, manifest.name, manifest.description, manifest.date, manifest.isBlooper, manifest.primaryScreenshot, manifest.assets || [], links, fullDesc);
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get description() {
    return this._desc;
  }
  get date() {
    return this._date;
  }
  get isBlooper() {
    return this._isBlooper;
  }
  get primaryScreenshot() {
    return this._primaryScreenshot;
  }

  private _assets: EntryAsset[];
  get assets() {
    return this._assets;
  }

  get links() {
    return this._links;
  }

  get fullDescription() {
    return this._fullDesc;
  }

  toPortfolioRustEngineTimelineEntry(): PortfolioRustEngineTimelineEntry {
    return {
      Id: this.id,
      Name: this.name,
      Description: this.description,
      Date: this.date,
      IsBlooper: this.isBlooper,
      PrimaryScreenshot: this.primaryScreenshot,
      Assets: this.assets.map(asset => ({ Type: asset.type, Src: asset.src, Alt: asset.alt })),
      Links: this.links.map(([name, href]) => ({ Name: name, Href: href })),
      Body: this.fullDescription
    };
  }
}
