import React from 'react';
import { Menu } from '@headlessui/react';
import { useRouter } from 'next/router'

import { navLinkType, navLinksType } from '../../types/navLinks';

function MyDropdown({ label, navLinks }: navLinksType) {
  const router = useRouter();
  return (
    <Menu>
      <Menu.Button
        className="
          py-2
          px-2
          border-2 border-orange-600
          transition-all
          hover:bg-orange-600 hover:cursor-pointer hover:border-black
          duration-500
        "
      >
        {label}
      </Menu.Button>
      <Menu.Items
        className="
          absolute
          right-5
          mt-2
          p-3
          z-20
          origin-top-right
          divide-y divide-neutral-700
          bg-black shadow-md shadow-black
          ring-1 ring-amber ring-opacity-5 focus:outline-none
        "
      >
        {
          navLinks.map(({ text, link }: navLinkType): React.ReactNode => {
            return (
              <Menu.Item
              >
                {({ active }) => (
                  <button
                    className={`
                      ${active && 'bg-blue-500'}
                      flex
                      group
                      w-full
                      transition-all
                      hover:hover:bg-orange-800 hover:cursor-pointer
                      duration-700
                    `}
                    onClick={() => router.push(link)}
                  >
                    {text}
                  </button>
                )}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;