import { cardType, cardsType } from "../types/cards";

import interior from "../public/services/interior.jpg";
import exterior from "../public/services/exterior.jpg";
import headlight from "../public/services/headlight.jpg";
import ceramicCoating from "../public/services/ceramic-coating.jpg";
import polishing from "../public/services/polishing.jpg";
import contact from "../public/contact.jpg";

const cardsData: cardsType = [
  {
    title: "Exterior Detailing",
    subtitle: "Clean and restore the surface of the car's finish.",
    link: "/exterior",
    image: exterior,
  },
  {
    title: "Interior Detailing",
    subtitle: "Deep clean the interior of your car.",
    link: "/interior",
    image: interior,
  },
  {
    title: "Headlight Polishing",
    subtitle: "Make your headlight shiney new!",
    link: "/headlight",
    image: headlight,
  },
  {
    title: "Polishing",
    subtitle: "Your car will be nice and shiney!",
    link: "/polishing",
    image: polishing,
  },
  {
    title: "Contact",
    subtitle: "Talk to us. We can help you!",
    link: "/contact",
    image: contact,
  },
];

export { cardsData };
