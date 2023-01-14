import type { slidesType } from "../types/carousel";

import interior from '../public/services/interior.jpg';
import exterior from '../public/services/exterior.jpg';
import headlight from '../public/services/headlight.jpg';
import ceramicCoating from '../public/services/ceramic-coating.jpg';
import polishing from '../public/services/polishing.jpg';


const slidesData: slidesType = [
  {
    text: 'Exterior Detailing',
    link: '/exterior',
    image: exterior
  },
  {
    text: 'Interior Detailing',
    link: '/interior',
    image: interior
  },
  {
    text: 'Headlight Polishing',
    link: '/headlight',
    image: headlight
  },
  {
    text: 'Ceramic Coating',
    link: '/ceramic-coating',
    image: ceramicCoating
  },
  {
    text: 'Polishing',
    link: '/polishing',
    image: polishing
  },
];

export { slidesData };