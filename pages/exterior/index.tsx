import
PriceTable,
{ PriceTableType }
  from '../../components/PriceTable/PriceTable';

const STAP1: PriceTableType = {
  title: "STAP 1",
  subtitle: "Basic Wash",
  price: "€ 60",
  items: {
    list: [
      "Auto krasloos wassen met neutrale shampoo",
      "Banden ontvetten en aanbrengen van een dressing",
      "Deurstijlen reinigen",
      "Grondig reinigen velgen",
      "Krasloos drogen",
      "Ramen reinigen",
      "Wielkasten reinigen",
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

const STAP2: PriceTableType = {
  title: "STAP 2",
  subtitle: "Motorruimte Reinigen",
  price: "€ 65",
  items: {
    list: [
      "Handwas en drogen van de motorruimte",
      "Los vuil, bladeren en straatafval verwijderen uit de motorruimte",
      "Opkuisen van de motorkop (onderkant)",
      "Plastic en rubber delen krijgen een voeding dat glans en bescherming bied",
      "Verwijderen en poetsen van alle beschermkappen",
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

const STAP3: PriceTableType = {
  title: "STAP 3",
  subtitle: "Wash & Wax",
  price: "€ 145",
  items: {
    list: [
      "Auto krasloos wassen met neutrale shampoo",
      "Banden ontvetten en aanbrengen van een dressing",
      "Beschermende waxlaag aanbrengen",
      "Clayen van het lakwerk",
      "Deurstijlen reinigen",
      "Infoamen met actief schuim",
      "Krasloos drogen",
      "Omvat basic exterieur",
      "Ramen reinigen",
      "Reinigen uitlaatpijpen",
      "Wielkasten reinigen",
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

function Exterior() {
  return (
    <div className="mb-5 h-full">
      <h1 className="
        capitalize
        text-4xl
        font-extrabold
        text-center
        m-10
      ">
        Exterior Detailing
      </h1>
      <div className="
        flex flex-col md:flex-row gap-3
        justify-center
        m-3 md:m-0
        md:h-[48rem]
      ">
        <PriceTable {...STAP1} />
        <PriceTable {...STAP2} />
        <PriceTable {...STAP3} />
      </div>
    </div>
  );
}


export default Exterior;