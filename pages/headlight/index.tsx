import
PriceTable,
{ PriceTableType }
  from '../../components/PriceTable/PriceTable';

const STAP1: PriceTableType = {
  title: "STAP 1",
  subtitle: "Koplamp renovatie",
  price: "€ 30/lamp",
  items: {
    list: [
      "Reigen van de koplampen",
      "Reigen van de koplampen",
      "Afschuren van gele of doffe schijn",
      "Polijsten tot perfect resultaat",
      "Aanbrengen van koplamp wax. Mogelijkheid tot aanbrengen van een koplamp coating (optioneel en tegen meerprijs)",
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

function Headlight() {
  return (
    <div className="mb-5 h-full">
      <h1 className="
        capitalize
        text-4xl
        font-extrabold
        text-center
        m-10
      ">
        Headlight Polish
      </h1>
      <div className="
        flex flex-col md:flex-row gap-3
        justify-center
        m-3 md:m-0
        md:h-[32rem]
      ">
        <PriceTable {...STAP1} />
      </div>
    </div>
  );
}


export default Headlight;