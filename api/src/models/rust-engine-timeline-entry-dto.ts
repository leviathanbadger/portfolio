import { RustEngineTimelineEntry } from './rust-engine-timeline-entry.js';

export type RustEngineTimelineEntryDto = {
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

export function convertToRustEngineTimelineEntryDto(entry: RustEngineTimelineEntry): RustEngineTimelineEntryDto {
  return {
    id: entry.Id,
    name: entry.Name,
    description: entry.Description,
    date: entry.Date,
    isBlooper: entry.IsBlooper,
    primaryScreenshot: entry.PrimaryScreenshot,
    assets: (entry.Assets || []).map(asset => ({
      type: asset.Type,
      src: asset.Src,
      alt: asset.Alt
    })),
    links: (entry.Links || []).map(link => ({
      name: link.Name,
      href: link.Href
    })),
    body: entry.Body
  };
}
