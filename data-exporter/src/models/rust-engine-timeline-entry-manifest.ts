

export type RustEngineTimelineEntryManifestAsset = {
  type: 'image' | 'video',
  src: string,
  alt: string
};

export type RustEngineTimelineEntryManifestLink = {
  name: string,
  href: string
};

export type RustEngineTimelineEntryManifest = {
  id: number,
  name: string,
  description: string,
  date: `${number}-${number}-${number}`,
  isBlooper: boolean,
  primaryScreenshot: string,
  assets: RustEngineTimelineEntryManifestAsset[],
  links: RustEngineTimelineEntryManifestLink[],
  body: string,
  pathToBody: string
};
