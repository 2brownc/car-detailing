import React from 'react';

import { navLinksType } from '../../types/navLinks';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CallToActionButton, { CallToActionButtonType } from '../CallToActionButton/CallToActionButton';

function NavBarTop({ navLinks }: navLinksType) {
  return (
    <div
      className="
          flex flex-row flex-wrap gap-3
          px-2 py-1
          bg-neutral-900
          text-neutral-50
          shadow-2xl shadow-neutral-400
        "
    >
      <div
        className="
        "
      >
        <img
          src="/logo.png"
          className="
            hidden sm:inline
            absolute
            w-36 h-36
            place-self-start
            -top-1 z-40"
        />
      </div>
      <div
        className="
        "
      >
        <div
          className="
            hidden sm:inline sm:invisible
            w-36
            place-self-start
            -top-1 z-40"
        >
          <div className="w-32">
          </div>
        </div>
      </div>
      <div
        className="
          basis-auto grow
          py-4
          text-center
          font-['Passion_One']
          font-bold
          text-3xl
          md:text-5xl
          tracking-wider
        "
      >
        PK DETAILING
      </div>
      <div className="
        hidden sm:inline
        self-center
      ">
        <CallToActionButton
          text="Get Started"
          link="/contact"
        />
      </div>
      <div
        className="
          inline lg:hidden
          flex-initial flex-row space-x-1
          self-center justify-self-start
        "
      >
        <DropdownMenu label={"MENU"} navLinks={navLinks} />
      </div>
      <div
        className="
          basis-full
          hidden lg:inline
          flex-initial flex-row space-x-1
        ">
        <div className="flex justify-center">
          <HorizontalMenu navLinks={navLinks} />
        </div>
      </div>
    </div>
  );
}

export default NavBarTop;