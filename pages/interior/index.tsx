import
PriceTable,
{ PriceTableType }
  from '../../components/PriceTable/PriceTable';

const STAP1: PriceTableType = {
  title: "STAP 1",
  subtitle: "Basic",
  price: "€ 45",
  items: {
    list: [
      "Automatten reinigen",
      "Dashboard afstoffen",
      "Hoge intensiteit stofzuigen",
      "Uitblazen met compressor"
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};
const STAP2: PriceTableType = {
  title: "STAP 2",
  subtitle: "Dieptereiniging Level 1",
  price: "€ 149",
  items: {
    list: [
      "Alles in Stap 1",
      "Afstoffen tot in de details",
      "Reinigen binnenkant ramen",
      "Reinigen deurstijlen",
      "Reinigen gordels",
      "Reinigen lederen zetels",
      "Reinigen met interieurshampoo",
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};
const STAP3: PriceTableType = {
  title: "STAP 3",
  subtitle: "Dieptereiniging Level 2",
  price: "€ 249",
  items: {
    list: [
      "Alles in Stap 2",
      "Aanbrengen bandendressing",
      "Drogen met zachte droogdoek",
      "Exterieur wassen",
      "Handwas",
      "Ozon behandeling om onaangename geuren te verwijderen",
      "Rubbers voeden",
      "Voeden + reinigen lederen bekleding",
      "Voeden van plastic interieur delen d.m.v dressing",
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

function Interior() {
  return (
    <div className="mb-5 h-full">
      <h1 className="
        capitalize
        text-4xl
        font-extrabold
        text-center
        m-10
      ">
        Interior Detailing
      </h1>
      <div className="
        flex flex-col md:flex-row gap-3
        justify-center
        m-3 md:m-0
        md:h-[45rem]
      ">
        <PriceTable {...STAP1} />
        <PriceTable {...STAP2} />
        <PriceTable {...STAP3} />
      </div>
    </div>
  );
}


export default Interior;