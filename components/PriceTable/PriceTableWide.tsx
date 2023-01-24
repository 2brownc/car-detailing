import { useRouter } from 'next/router';

type AlternateList = {
  list: string[],
  colorA: string,
  colorB: string
};


function AlternateList(
  { list, colorA, colorB }: AlternateList
) {
  return (
    <ul>
      {
        list.map((item, index) => (
          <li className={`
            border-b-2 border-indigo-100
            py-2
            ${index % 2 === 0 ? `${colorA}` : `${colorB}`}
            ${index === 0 ? 'text-lg' : null}
          `}>
            {item}
          </li>
        ))
      }
    </ul>
  );
}

type PriceTableType = {
  title: string,
  subtitle: string,
  price: string,
  items: AlternateList
  link: string,
};

function PriceTableWide({
  title,
  subtitle,
  price,
  items,
  link
}: PriceTableType) {
  const route = useRouter();

  return (
    <div className="
        shadow-2xl
        text-center
        flex flex-col
        md:w-3/5 lg:w-2/5
    ">
      <div className="
          bg-indigo-900 text-white
          font-extrabold
          tracking-wide
          p-3
          shadow-2xl shadow-black
          rounded-t-lg
        ">
        {title}
      </div>
      <div className="
          bg-gradient-to-r from-cyan-500 to-blue-500
          border-x-2 border-x-indigo-900
          text-black
          p-3
        ">
        <div className="
            text-gray-100
          ">
          {subtitle}
        </div>
        <div className="
            text-3xl
            font-bold
            bg-clip-text text-transparent bg-gradient-to-r
            to-orange-200 from-amber-300
    
          ">
          {price}
        </div>
      </div>
      <div className="
          border-x-2 border-indigo-900 border-b-2 border-b-indigo-200
          bg-sky-100
          px-2
          text-left
        ">
        <AlternateList
          list={items.list}
          colorA={items.colorA}
          colorB={items.colorB}
        />
      </div>
      <div className="
          border-x-2 border-indigo-900 border-b-2
          bg-sky-100
          p-3
        ">
        <button
          className="btn btn-primary btn-wide
          "
          onClick={() => route.push(link)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PriceTableWide;

export type { PriceTableType };