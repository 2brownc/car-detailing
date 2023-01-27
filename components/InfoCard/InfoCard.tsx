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
          bg-gradient-to-r from-[#fff0dc] to-[#fef8e3]
          hover:to-[#fff0dc] hover:from-[#fef8e3]
          shadow-lg hover:shadow-2xl
          transition-all
          duration-500
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