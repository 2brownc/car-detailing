type InfoCardType = {
  question: string,
  answer: string,
};

function InfoCard({
  question,
  answer
}: InfoCardType) {
  return (
    <div className="
          md:w-3/5 lg:w-2/5
          p-4
          border border-black
          bg-gradient-to-l from-teal-100 to-sky-100
          hover:from-teal-200 hover:to-sky-200
          shadow-lg hover:shadow-2xl
        ">
      <div className="
            text-lg font-bold
            mb-1
        ">
        {question}
      </div>
      <div>
        {answer}
      </div>
    </div>
  );
}

export default InfoCard;

export type { InfoCardType };