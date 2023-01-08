import { readFile } from 'fs/promises';
import { PortfolioHoudiniDailyPractice } from './portfolio-houdini-daily-practice.js';
import { HoudiniDailyPracticeManifest } from './houdini-daily-practice-manifest.js';

export type PracticeAsset = { type: 'image' | 'video', src: string };

export class HoudiniDailyPractice {
  constructor(
    private _id: number,
    private _name: string,
    private _desc: string,
    private _date: string,
    thumbnails: string[],
    assets: PracticeAsset[],
    referenceAssets: PracticeAsset[],
    private _tags: string[],
    private _links: [string, string][],
    private _fullDesc: string = ''
  ) {
    this._thumbnails = [...thumbnails];
    this._assets = assets.map(asset => ({...asset}));
    this._referenceAssets = referenceAssets.map(asset => ({...asset}));
  }

  static async fromManifest(manifest: HoudiniDailyPracticeManifest): Promise<HoudiniDailyPractice> {
    let fullDesc = (await readFile(manifest.pathToBody)).toString();
    let links = (manifest.links || []).map(link => [link.name, link.href] as [string, string]);
    return new HoudiniDailyPractice(manifest.id, manifest.name, manifest.description, manifest.date, manifest.thumbnails, manifest.assets || [], manifest.referenceAssets || [], manifest.tags, links, fullDesc);
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

  private _thumbnails: string[];
  get thumbnails() {
    return this._thumbnails;
  }

  private _assets: PracticeAsset[];
  get assets() {
    return this._assets;
  }
  private _referenceAssets: PracticeAsset[];
  get referenceAssets() {
    return this._referenceAssets;
  }

  get tags() {
    return this._tags;
  }
  get links() {
    return this._links;
  }

  get fullDescription() {
    return this._fullDesc;
  }

  toPortfolioHoudiniDailyPractice(): PortfolioHoudiniDailyPractice {
    return {
      Id: this.id,
      Name: this.name,
      Description: this.description,
      Date: this.date,
      Thumbnails: this.thumbnails,
      Assets: this.assets.map(asset => ({ Type: asset.type, Src: asset.src })),
      ReferenceAssets: this.referenceAssets.map(asset => ({ Type: asset.type, Src: asset.src })),
      Tags: new Set(this.tags),
      Links: this.links.map(([name, href]) => ({ Name: name, Href: href })),
      Body: this.fullDescription
    };
  }
}
