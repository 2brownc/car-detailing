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

function PriceTable({
  title,
  subtitle,
  price,
  items,
  link
}: PriceTableType) {
  const route = useRouter();

  return (
    <div className="
        md:w-72 lg:w-96
        shadow-lg
        text-center
        flex flex-col
        h-full
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
            bg-clip-text text-transparent bg-gradient-to-l
            from-orange-100 to-amber-300
    
          ">
          {price}
        </div>
      </div>
      <div className="
          border-x-2 border-indigo-900 border-b-2 border-b-indigo-200
          bg-sky-100
          px-2
          grow
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
          className="btn btn-primary
          "
          onClick={() => route.push(link)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PriceTable;

export type { PriceTableType };