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
    className: "",
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
  };
  return (
    <div className="flex align-center justify-center overflow-x-hidden h-max">
      <div className="
        w-[100vw] h-[calc(100vw_*_0.65)] md:h-[calc(100vw_*_0.6)]
      ">
        <Slider {...settings}>
          {slidesData.map(({ text, link, image }: slideType) => {
            return (
              <div
                key={link}
                className=""
              >
                <Slide
                  text={text}
                  link={link}
                  image={image}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
}



function Slide({ text, link, image }: slideType) {
  const route = useRouter();
  return (
    <div
      className="h-[calc(100vw_*_0.5625)] relative"
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
          right-4 md:right-16
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