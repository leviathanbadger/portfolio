

export type RustEngineTimelineEntry = {
  id: number,
  name: string,
  description: string,
  date: string,
  isBlooper: boolean,
  primaryScreenshot: string,
  assets: {
    type: 'image' | 'video',
    src: string,
    alt: string
  }[],
  links: {
    name: string,
    href: string
  }[],
  body: string
};
