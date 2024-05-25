"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import Montee from "../../public/images/carou1.jpg";
import Bain from "../../public/images/carou2.jpg";
import Kitchen from "../../public/images/carou3.jpg";
import Salon from "../../public/images/carou4.jpg";

export const Caroussel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src={Kitchen}
            alt="kitchen"
            className="w-full h-dvh object-cover object-center"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={Salon}
            alt="salon"
            className="w-full h-dvh object-cover object-center"
          />
        </div>

        <div className="embla__slide">
          <Image
            src={Montee}
            alt="montee"
            className="w-full h-dvh object-cover object-center"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={Bain}
            alt="bain"
            className="w-full h-dvh object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
