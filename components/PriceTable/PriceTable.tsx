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
            border-b-2 border-pt_divider
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
      <div className={`
          bg-pt_primary text-white
          font-extrabold
          tracking-wide
          p-3
          shadow-2xl shadow-black
          rounded-t-lg
        `}>
        {title}
      </div>
      <div className="
          bg-gradient-to-r from-pt_secondary to-pt_tertiary
          border-x-2 border-x-pt_border
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
            text-black
          ">
          {price}
        </div>
      </div>
      <div className={`
          border-x-2 border-pt_border border-b-2 border-b-pt_divider
          bg-pt_body
          px-2
          grow
      `}>
        <AlternateList
          list={items.list}
          colorA={items.colorA}
          colorB={items.colorB}
        />
      </div>
      <div className={`
          border-x-2 border-pt_border border-b-2
          bg-pt_body
          p-3
        `}>
        <button
          className="btn btn-primary
          bg-pt_button hover:bg-pt_button border-pt_button
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