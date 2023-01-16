import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';

import { cardType, cardsType } from '../../types/cards';

type cardProps = {
  cardData: cardType
};

/*
        h-[calc(100vw_*_0.5625)]
        md:h-[calc(100vw_*_0.28125)]
*/

function Card({ cardData }: cardProps) {
  const route = useRouter();
  const { title, subtitle, link, image } = cardData;
  return (
    <div
      onClick={() => route.push(link)}
      className="
        relative
        bg-local bg-cover bg-center
        hover:cursor-pointer
        hover:brightness-125
        transition-all
        duration-1000
        "
    >
      <div className="
        overflow-hidden
      ">
        <div
          className="
            hover:scale-110 transition-all duration-500
        ">
          <div className="
            h-[calc(100vw_*_0.5625)]
            md:h-[calc(100vw_*_0.28125)]
          ">
            <Image
              src={image}
              alt="interior detailing"
              placeholder="blur"
              fill
            />
          </div>
        </div>
      </div>
      <div
        className="
          absolute
          text-md
          text-white
          text-left
          align-text-bottom
          z-30
          bottom-8
        "
      >
        <div className="  
          m-1
        ">
          <span className="
            bg-zinc-900
            text-xl md:text-3xl
            px-2 py-1
          ">
            <span>
              {title}
            </span>
          </span>
        </div>

        {subtitle
          ? (<div className="
          my-3 mx-1
        ">
            <span className="
            bg-slate-900
            text-sm md:text-base
            px-2 py-1
          ">
              {subtitle}
            </span>
          </div>)
          : null
        }
      </div>

    </div >
  );
}

type CardsProps = {
  cardsData: cardsType
};

function Cards({ cardsData }: CardsProps) {
  return (
    <div className="
      grid grid-cols-1 md:grid-cols-2 gap-4
    ">
      {
        cardsData.map((cardData: cardType) => (
          <Card cardData={cardData} />
        ))
      }
    </div>
  );
}

export default Cards;