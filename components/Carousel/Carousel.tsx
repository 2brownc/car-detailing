import { StaticImageData } from "next/image"
import React from 'react';
import { useRouter } from 'next/router'
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowCircleRight } from 'react-icons/fa';

import type { slideType, slidesType } from "../../types/carousel";

type carouselProps = {
  slidesData: slidesType
}

function Carousel({ slidesData }: carouselProps) {
  const settings = {
    dots: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {slidesData.map(({ text, link, image }: slideType) => {
        return (
          <div key={link}>
            <div
              className="h-[calc(100vw_*_0.5625)] w-screen"
            >
              <Slide
                text={text}
                link={link}
                image={image}
              />
            </div>
          </div>
        )
      })}
    </Slider>
  );
}

function Slide({ text, link, image }: slideType) {
  const route = useRouter();
  return (
    <div
      className="h-[calc(100vw_*_0.5625)] w-screen relative"
    >
      <Image
        src={image}
        alt="interior detailing"
        placeholder="blur"
        fill
      />
      <div
        className="
          absolute
          text-[3vw]
          text-white
          text-center
          align-text-bottom
          bg-black
          z-10  
          bottom-1/4
          right-16
        "
      >
        <div className="flex flex-row gap-x-3
          px-4 py-2
        ">
          <div>
            {text}
          </div>
          <div className="
            hover:scale-125 hover:cursor-pointer
            self-center
            transition-all
            duration-500
          "
          >
            <FaArrowCircleRight onClick={() => route.push(link)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

