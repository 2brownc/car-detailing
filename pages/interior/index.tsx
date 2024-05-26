import PriceTable, {
  PriceTableType,
} from "../../components/PriceTable/PriceTable";

const STEP1: PriceTableType = {
  title: "STEP 1",
  subtitle: "Basic",
  price: "€ 45",
  items: {
    list: [
      "Clean floor mats",
      "Dust the dashboard",
      "High-intensity vacuuming",
      "Blow out with compressed air",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};
const STEP2: PriceTableType = {
  title: "STEP 2",
  subtitle: "Deep Cleaning Level 1",
  price: "€ 149",
  items: {
    list: [
      "Includes everything in Step 1",
      "Deeper dusting",
      "Clean the inside of the windows",
      "Clean the door jambs",
      "Clean the seatbelts",
      "Clean the leather seats",
      "Clean with interior shampoo",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};
const STEP3: PriceTableType = {
  title: "STEP 3",
  subtitle: "Deep Cleaning Level 2",
  price: "€ 249",
  items: {
    list: [
      "Includes everything in Step 2",
      "Apply tire dressing",
      "Dry with a soft towel",
      "Wash exterior",
      "Hand wash",
      "Ozone treatment to remove unpleasant odors",
      "Condition rubber",
      " Condition and clean leather upholstery",
      "Condition plastic interior parts with dressing",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

function Interior() {
  return (
    <div className="mb-5 h-full">
      <h1
        className="
        capitalize
        text-4xl
        font-extrabold
        text-center
        m-10
      "
      >
        Interior Detailing
      </h1>
      <div
        className="
        flex flex-col md:flex-row gap-3
        justify-center
        m-3 md:m-0
        md:h-[45rem]
      "
      >
        <PriceTable {...STEP1} />
        <PriceTable {...STEP2} />
        <PriceTable {...STEP3} />
      </div>
    </div>
  );
}

export default Interior;
