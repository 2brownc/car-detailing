import
PriceTableWide,
{ PriceTableType }
  from '../../components/PriceTable/PriceTableWide';

import
InfoCard,
{ InfoCardType }
  from '../../components/InfoCard/InfoCard';

const STAP1: PriceTableType = {
  title: "Bronze",
  subtitle: "Vanaf",
  price: "€ 279",
  items: {
    list: [
      "Onze standaard bronze car detailing behandeling is al zeer uitgebreid. Tijdens deze behandeling wordt de auto eerst volledig gewassen en gedecontamineerd. Hierna wordt er een lichte lakbehandeling toegepast die het lakoppervlak voor 100% zijn unieke diepe glans teruggeeft en ook lichte lakbeschadigingen vermindert en verwijdert. Vervolgens wordt de auto beschermd met een hoogwaardige wax. Als u echter diepere krassen wilt laten verwijderen, raden wij aan om te kiezen voor onze Silver of Gold behandeling.",
      "➤ 1-Staps",
      "➤ Zeer lichte krasjes",
      "➤ Optimale glans van de wagen"
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

const STAP2: PriceTableType = {
  title: "Silver",
  subtitle: "Vanaf",
  price: "€ 489",
  items: {
    list: [
      "Tijdens onze silver car detailing behandeling richten we ons voornamelijk op het lakoppervlak. We werken hiervoor van grof naar een perfecte afwerking, waarbij de lak grof gepolijst wordt en waarbij er 85% van de waskrassen en 70% van de RDS (random deeper scratches) worden verwijderd. De lak wordt in 2 stappen gepolijst en gecorrigeerd om een perfecte glans te bereiken.",
      "➤ 2-Staps",
      "➤ Medium krassen",
      "➤ Verwijderen van oxidatie"
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

const STAP3: PriceTableType = {
  title: "GOld",
  subtitle: "Vanaf",
  price: "€ 579",
  items: {
    list: [
      "Met onze Gold lakcorrectie Pack zullen we minimaal een 3-staps polijstmethode uitvoeren, dit is onze meest uitgebreide detailing behandeling die we aanbieden. Door deze stappen zullen waskrassen bijna volledig worden gecorrigeerd en RDS (Random deeper scratches) zullen voor meer dan 90% uit de lak worden verwijderd. Alle aspecten van de buitenkant van uw auto zullen zorgvuldig worden gereinigd, ontsmet, gepolijst en behandeld met een beschermingslaag.",
      "➤ Meerstaps polijsten",
      "➤ Diepe krassen",
      "➤ Showroom look"
    ],
    colorA: "",
    colorB: "",
  },
  link: '/contact',
};

const INFO1: InfoCardType = {
  question: 'Wat is lakcorrectie?',
  answer: 'Lakcorrectie is de kunst van het gelijkmaken van de blanke lak om waskrassen, krassen, oxidatie, watervlekken en nog veel meer defecten die de lak er dof en niet glanzend doen uitzien te elimineren.'
};

const INFO2: InfoCardType = {
  question: 'Hoe wordt lakcorrectie gedaan?',
  answer: 'De juiste stappen voor het herstellen van een autolak met lakcorrectie is door; het oppervlak te ontsmetten van vuil, omgevingsval en ijzerdeeltjes. Vervolgens, na een goede en kritische analyse van de lakdikte, een plan opstellen om de meest heldere laklaag te behouden en tegelijkertijd een ultieme reflectie zonder imperfecties te bereiken. Het proces wordt gevolgd door een nauwgezette verfijning tot een gepolijst glad oppervlak met een polijstmachine.'
};

const INFO3: InfoCardType = {
  question: 'Waarom is lakcorrectie belangrijk?',
  answer: 'Een goed uitgevoerde lakcorrectie op een voertuig zal de esthetiek van de auto enorm veranderen; ook zullen de ware kleuren weer tot leven komen. Dit zal de aandacht vangen van iedereen die voorbijkomt. Tegelijkertijd zal een gecorrigeerd voertuig zijn waarde meer behouden en voor meer te verkopen zijn.'
};

const INFO4: InfoCardType = {
  question: 'Wanneer moet verf correctie worden gedaan?',
  answer: 'Verf correctie moet worden gedaan wanneer er te veel onvolkomenheden in de verf zijn of wanneer je een auto wilt klaarmaken voor de showroom.'
};

function Polishing() {
  return (
    <div className="m-2">
      <h1 className="
        capitalize
        text-4xl
        font-extrabold
        text-center
        m-10
      ">
        Polishing
      </h1>
      <div className="
        flex flex-col gap-5 md:gap-10
        items-center
      ">
        <PriceTableWide {...STAP1} />
        <PriceTableWide {...STAP2} />
        <PriceTableWide {...STAP3} />
      </div>

      <div>
        <h2 className="
        capitalize
        text-3xl
        font-bold
        text-center
        mb-10 mt-20
        ">
          Meer Informatie
        </h2>
        <div className="
          flex flex-col gap-3
          items-center
        ">
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