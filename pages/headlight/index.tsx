import PriceTable, {
  PriceTableType,
} from "../../components/PriceTable/PriceTable";

const STEP1: PriceTableType = {
  title: "STEP 1",
  subtitle: "Headlight restoration",
  price: "€ 30/lamp",
  items: {
    list: [
      "Cleaning the headlights",
      "Sanding away yellow or dull shine",
      "Polishing to a perfect finish",
      "Applying headlight wax",
    ],
    colorA: "",
    colorB: "",
  },
  link: "/contact",
};

function Headlight() {
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
        Headlight Polish
      </h1>
      <div
        className="
        flex flex-col md:flex-row gap-3
        justify-center
        m-3 md:m-0
        md:h-[32rem]
      "
      >
        <PriceTable {...STEP1} />
      </div>
    </div>
  );
}

export default Headlight;
