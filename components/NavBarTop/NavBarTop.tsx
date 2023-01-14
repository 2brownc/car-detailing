import React from 'react';

import { navLinksType } from '../../types/navLinks';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CallToActionButton, { CallToActionButtonType } from '../CallToActionButton/CallToActionButton';

function NavBarTop({ navLinks }: navLinksType) {
  return (
    <div
      className="
          w-screen
          flex flex-row
          bg-neutral-900
          text-neutral-50
          shadow-2xl shadow-neutral-400
        "
    >
      <div
        className="
          grow-1
        "
      >
        <img
          src="/logo.png"
          className="absolute w-24 h-24 place-self-start -top-1 z-40"
        />
      </div>
      <div
        className="
              grow
              py-4
              text-center
              invisible
              md:visible
              font-['Passion_One']
              font-bold
              text-5xl
            "
      >
        PK DETAILING
      </div>
      <div className="self-center">
        <CallToActionButton
          text="Get Started"
          link="/contact"
        />
      </div>
      <div
        className="
          lg:hidden
          flex-initial flex-row space-x-1
          self-center
        "
      >
        <DropdownMenu label={"MENU"} navLinks={navLinks} />
      </div>
      <div
        className="
              hidden lg:flex
              flex-initial flex-row space-x-1
              self-center
            "

      >
        <HorizontalMenu navLinks={navLinks} />
      </div>
    </div>
  );
}

export default NavBarTop;