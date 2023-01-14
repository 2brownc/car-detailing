import { StaticImageData } from "next/image";

type slideType = {
  text: string,
  link: string,
  image: StaticImageData
};

type slidesType = slideType[];

export type { slideType, slidesType };