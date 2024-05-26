import PriceTable, {
  PriceTableType,
} from "../../components/PriceTable/PriceTable";

const STEP1: PriceTableType = {
  title: "STEP 1",
  subtitle: "Basic Wash",
  price: "€ 60",
  items: {
    list: [
      "Car wash without scratches using neutral shampoo",
      "Degrease tires and apply dressing",
      "Clean door jambs",
      "Thoroughly clean rims",
      "Dry without scratches",
      "Clean windows",
      "Clean wheel arches",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

const STEP2: PriceTableType = {
  title: "STEP 2",
  subtitle: "Engine Bay Cleaning",
  price: "€ 65",
  items: {
    list: [
      "Hand wash and dry the engine compartment",
      "Remove loose dirt, leaves, and debris from the engine compartment",
      "Clean the engine head (underside)",
      "Dressing to plastic and rubber parts to provide shine and protection",
      "Remove and polish all protective covers",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

const STEP3: PriceTableType = {
  title: "STEP 3",
  subtitle: "Wash & Wax",
  price: "€ 145",
  items: {
    list: [
      "Scratch-free car wash with neutral shampoo",
      "Degrease and apply dressing to tires",
      "Apply a protective wax coating",
      "Clay bar the paintwork",
      "Clean door jambs",
      "Apply active foam",
      "Scratch-free drying",
      "Includes basic exterior",
      "Clean windows",
      "Clean exhaust pipes",
      "Clean wheel arches",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

function Exterior() {
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
        Exterior Detailing
      </h1>
      <div
        className="
        flex flex-col md:flex-row gap-3
        justify-center
        m-3 md:m-0
        md:h-[48rem]
      "
      >
        <PriceTable {...STEP1} />
        <PriceTable {...STEP2} />
        <PriceTable {...STEP3} />
      </div>
    </div>
  );
}

export default Exterior;
