

export type PortfolioHoudiniDailyPractice = {
  Id: number,
  Name: string,
  Description: string,
  Date: string,
  Thumbnails: string[],
  Assets: {
    Type?: 'image' | 'video',
    Src?: string
  }[],
  ReferenceAssets: {
    Type?: 'image' | 'video',
    Src?: string
  }[],
  Tags: Set<string>,
  Links: {
    Name: string,
    Href: string
  }[],
  Body: string
};
