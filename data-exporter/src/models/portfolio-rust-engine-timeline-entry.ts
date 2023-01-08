

export type PortfolioRustEngineTimelineEntry = {
  Id: number,
  Name: string,
  Description: string,
  Date: string,
  IsBlooper: boolean,
  PrimaryScreenshot: string,
  Assets: {
    Type: 'image' | 'video',
    Src: string,
    Alt: string
  }[],
  Links: {
    Name: string,
    Href: string
  }[],
  Body: string
};
