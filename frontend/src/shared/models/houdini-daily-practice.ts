

export type HoudiniDailyPractice = {
  id: string,
  prevId: string | null,
  nextId: string | null,
  name: string,
  description: string,
  fullDescription: string,
  tags: string[],
  links: {
    name: string,
    href: string
  }[]
};
