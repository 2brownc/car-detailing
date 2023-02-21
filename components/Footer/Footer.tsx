import React from 'react';
import { useRouter } from 'next/router';

import { AiFillPhone } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import { cardsData } from '../../data/cards';

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
                hover:cursor-pointer
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
              <a href="tel:+32489563824">+32 489 563 824</a>
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
              <a href="mailto:pkdetailingauto@gmail.com">pkdetailingauto@gmail.com</a>
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
              <a href="https://www.facebook.com/profile.php?id=100089003496003">
                Pkdetailing
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
              <AiFillInstagram />
              <a href="https://instagram.com/pk_autodetailing?igshid=YmMyMTA2M2Y=">
                pk_autodetailing
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
              <AiFillLinkedin />
              <a href="https://www.linkedin.com/mwlite/company/pkdetailing">
                pkdetailing
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
            <span>Afrikalaan 73,</span>
            <span>9000 Gent,</span>
            <span>Belgium</span>
          </address>
        </div>
      </div>

    </div>
  );
}

export default Footer;