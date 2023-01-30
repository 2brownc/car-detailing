import React from 'react';
import { useRouter } from 'next/router';

import { AiFillPhone } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import type { slidesType } from "../types/carousel";
import { cardsData } from '../../data/cards';


function Footer2() {
  return (
    <div
      className="
          grid grid-rows-2
          bg-black
          text-white
          shadow-2xl shadow-neutral-400
          items-center justify-center place-items-center
          p-5 gap-5
        "
    >
      <div className="
        flex flex-row gap-3
      ">
        <span className="  
          px-2 py-1
          hover:bg-orange-700
          transition-all
          duration-500
        ">
          <a
            href="/"
            className="
              appearence-none
              hover:mouse-pointer 
          ">
            Home
          </a>
        </span>
        <span className="  
          px-2 py-1
          hover:bg-orange-700
          transition-all
          duration-500
        ">
          <a
            href="/contact"
            className="
              appearence-none
              hover:mouse-pointer 
          ">
            Contact
          </a>
        </span>
      </div>
      <div className="
        font-['Passion_One']
        font-bold
        text-xl
        md:text-3xl
        tracking-wider
      ">
        PK DETAILING
      </div>
    </div>

  );
}

function Footer() {
  const router = useRouter();
  const servicesData = cardsData.filter(cardData => cardData.title !== 'Contact');
  const goHome = () => {
    router.push('/');
  };
  const goTo = (link: string) => {
    router.push(link);
  };
  return (
    <div className="
        flex md:flex-row flex-col
        justify-evenly
        bg-black
        text-white
        gap-5
        p-10
      ">
      <div className="self-center">
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
          hover:cursor-pointer
          hover:scale-110
          hover:text-orange-500
          transition-all
          duration-500
        "
          onClick={goHome}
        >
          PK DETAILING
        </div>
      </div>
      <div className="
        ">
        <div className="
            capitalize
            font-bold
            tracking-wide
            text-xl md:text-2xl
            mb-1
          ">
          Services
        </div>
        <ul>
          {
            servicesData.map(service => (
              <li className="
                transition-all
                duration-500
                p-1
                hover:bg-orange-600
              ">
                <div onClick={() => goTo(service.link)}>
                  {service.title}
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="
      ">
        <div className="
          capitalize
          font-bold
          tracking-wide
          text-xl md:text-2xl
          mb-1
        ">
          Contact
        </div>
        <ul>
          <li className="
                transition-all
                duration-500
                p-1
                hover:bg-orange-600
              ">
            <div className="flex flex-row items-center gap-1">
              <AiFillPhone />
              <a href="tel:+32-0473-72-01-34">+32 0473 72 01 34</a>
            </div>
          </li>
          <li className="
                transition-all
                duration-500
                p-1
                hover:bg-orange-600
              ">
            <div className="flex flex-row items-center gap-1">
              <AiTwotoneMail />
              <a href="mailto:pkdetailing@gmail.com">pkdetailing@gmail.com</a>
            </div>
          </li>
          <li className="
                transition-all
                duration-500
                p-1
                hover:bg-orange-600
              ">
            <div className="flex flex-row items-center gap-1">
              <AiFillFacebook />
              <a href="https://facebook.com/pkdetialing">
                pkdetailing
              </a>
            </div>
          </li>
          <li className="
                transition-all
                duration-500
                p-1
                hover:bg-orange-600
              ">
            <div className="flex flex-row items-center gap-1">
              <AiOutlineTwitter />
              <a href="https://twitter.com/@pkdetailing">
                @pkdetailing
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="
      ">
        <div className="
          capitalize
          font-bold
          tracking-wide
          text-xl md:text-2xl
          mb-1
        ">
          Address
        </div>
        <div>
          <address className="flex flex-col">
            <span>Tiegemberg 441,</span>
            <span>Tongrinne,</span>
            <span>Namur,</span>
            <span>Belgium - 5140</span>
          </address>
        </div>
      </div>

    </div>
  );
}

export default Footer;