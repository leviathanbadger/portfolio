

export type HoudiniDailyPractice = {
  id: string,
  // prevId: string | null,
  // nextId: string | null,
  name: string,
  description: string,
  date: string,
  thumbnails: string[],
  assets: {
    type: 'image' | 'video',
    src: string
  }[],
  referenceAssets: {
    type: 'image' | 'video',
    src: string
  }[]
  tags: string[],
  links: {
    name: string,
    href: string
  }[],
  body: string
};
