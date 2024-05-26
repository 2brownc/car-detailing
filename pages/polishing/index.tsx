import PriceTableWide, {
  PriceTableType,
} from "../../components/PriceTable/PriceTableWide";

import InfoCard, { InfoCardType } from "../../components/InfoCard/InfoCard";

const STEP1: PriceTableType = {
  title: "Bronze",
  subtitle: "Starting at",
  price: "€ 279",
  items: {
    list: [
      "Our standard Bronze car detailing treatment is already very extensive. During this treatment, the car is first thoroughly washed and decontaminated. Then, a light paint treatment is applied that gives the paint surface 100% of its unique deep gloss and also reduces and removes light paint damage. The car is then protected with a high-quality wax. However, if you want to have deeper scratches removed, we recommend choosing our Silver or Gold treatment.",
      "✔ 1-Step",
      "✔ Very light scratches",
      "✔ Optimal gloss",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

const STEP2: PriceTableType = {
  title: "Silver",
  subtitle: "Starting at",
  price: "€ 489",
  items: {
    list: [
      "During our Silver car detailing treatment, we focus primarily on the paint surface. We work our way from a rough finish to a perfect finish, coarsely polishing the paint and removing 85% of swirl marks and 70% of RDS (random deeper scratches). The paint is polished and corrected in 2 steps to achieve a perfect shine.",
      "✔ 2-Steps",
      "✔ Medium scratches",
      "✔ Removing oxidation",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

const STEP3: PriceTableType = {
  title: "Gold",
  subtitle: "Starting at",
  price: "€ 579",
  items: {
    list: [
      "With our Gold Paint Correction Pack, we will perform a minimum 3-step polishing method. This is our most comprehensive detailing treatment that we offer. Through these steps, swirl marks will be almost completely corrected and RDS (Random Deeper Scratches) will be removed from the paint by more than 90%. All aspects of the exterior of your car will be carefully cleaned, decontaminated, polished, and treated with a protective layer.",
      "✔ Multi-step polishing",
      "✔ Deep scratches",
      "✔ Showroom look",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

const INFO1: InfoCardType = {
  question: "What is paint correction?",
  answer:
    "Paint correction is the art of smoothing out the clear coat to eliminate swirl marks, scratches, oxidation, water spots, and many other defects that make the paint look dull and non-glossy.",
};

const INFO2: InfoCardType = {
  question: "How is paint correction done?",
  answer:
    "The right steps for restoring a car's paint with paint correction are as follows: cleaning the surface of dirt, environmental residue and iron particles. Then, after careful analysis of the paint thickness, formulating a plan to preserve the clearest layer of clearcoat while achieving ultimate reflection without imperfections at the same time. The process is followed by detailed refinement to a highly polished smooth surface using a buffing machine.",
};

const INFO3: InfoCardType = {
  question: "Why is paint correction important?",
  answer:
    "A well-executed paint correction on a vehicle will dramatically change its aesthetics; it will also bring back the true colors. This will catch the attention of everyone passing by. At the same time, a corrected vehicle will retain more value and be worth more when selling.",
};

const INFO4: InfoCardType = {
  question: "When should paint correction be done?",
  answer:
    "Paint correction should be done when there are too many imperfections in the paint or before preparing a car for the showroom.",
};

function Polishing() {
  return (
    <div className="m-2">
      <h1
        className="
        capitalize
        text-4xl
        font-extrabold
        text-center
        m-10
      "
      >
        Polishing
      </h1>
      <div
        className="
        flex flex-col gap-5 md:gap-10
        items-center
      "
      >
        <PriceTableWide {...STEP1} />
        <PriceTableWide {...STEP2} />
        <PriceTableWide {...STEP3} />
      </div>

      <div>
        <h2
          className="
        capitalize
        text-3xl
        font-bold
        text-center
        mb-10 mt-20
        "
        >
          More Information
        </h2>
        <div
          className="
          flex flex-col gap-3
          items-center
        "
        >
          <InfoCard {...INFO1} />
          <InfoCard {...INFO2} />
          <InfoCard {...INFO3} />
          <InfoCard {...INFO4} />
        </div>
      </div>
    </div>
  );
}

export default Polishing;
