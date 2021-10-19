import { HoudiniDailyPractice } from './houdini-daily-practice.js';

export type HoudiniDailyPracticeDto = {
  id: number,
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
  }[],
  tags: string[],
  links: {
    name: string,
    href: string
  }[],
  body: string
};

export function convertToHoudiniDailyPracticeDto(practice: HoudiniDailyPractice): HoudiniDailyPracticeDto {
  return {
    id: practice.Id,
    name: practice.Name,
    description: practice.Description,
    date: practice.Date,
    thumbnails: [...(practice.Thumbnails || [])],
    assets: (practice.Assets || []).map(asset => ({
      type: asset.Type,
      src: asset.Src
    })),
    referenceAssets: (practice.ReferenceAssets || []).map(asset => ({
      type: asset.Type,
      src: asset.Src
    })),
    tags: [...(practice.Tags || [])],
    links: (practice.Links || []).map(link => ({
      name: link.Name,
      href: link.Href
    })),
    body: practice.Body
  };
}
