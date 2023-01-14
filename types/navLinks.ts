type navLinkType = {
  text: string,
  link: string,
};

type navLinksType = {
  label?: string,
  navLinks: navLinkType[],
};

export type { navLinkType, navLinksType };