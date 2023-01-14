import { StaticImageData } from "next/image";

type cardType = {
  title: string,
  subtitle?: string,
  link: string,
  image: StaticImageData
};

type cardsType = cardType[];

export type { cardType, cardsType };