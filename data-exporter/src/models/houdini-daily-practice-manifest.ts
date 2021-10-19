

export type HoudiniDailyPracticeManifestAsset = {
  type: 'image' | 'video',
  src: string
};

export type HoudiniDailyPracticeManifestLink = {
  name: string,
  href: string
};

export type HoudiniDailyPracticeManifest = {
  id: number,
  name: string,
  description: string,
  date: `${number}-${number}-${number}`,
  thumbnails: string[],
  assets: HoudiniDailyPracticeManifestAsset[],
  referenceAssets?: HoudiniDailyPracticeManifestAsset[],
  tags: string[],
  links: HoudiniDailyPracticeManifestLink[],
  pathToBody: string
};
