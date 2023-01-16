import React from 'react';
import { useRouter } from 'next/router'

import { navLinkType, navLinksType } from '../../types/navLinks';

function HorizontalMenu({ navLinks }: navLinksType) {
  const router = useRouter();
  return <>
    {navLinks.map(({ text, link }: navLinkType): React.ReactNode => {
      return (
        <button
          className="
                appearance-none
                py-2
                px-3
                bg-neutral-900
                transition-all
                hover:hover:bg-orange-600 hover:cursor-pointer
                duration-500
              "
          onClick={() => router.push(link)}
        >
          {text}
        </button>
      )
    })}
  </>;
}

export default HorizontalMenu;