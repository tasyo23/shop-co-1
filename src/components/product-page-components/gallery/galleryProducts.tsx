"use client";
import ValidImage from "@/utils/valid-image";
import { FunctionComponent, useRef } from "react";
import Slider, { Settings } from "react-slick";
interface GalleryProductsProps {
  images: string[];
  className?: string;
  alt: string;
}

const GalleryProducts: FunctionComponent<GalleryProductsProps> = ({
  images,
  alt,
  className,
}) => {
  const imagesRef = useRef([]);
  const setting: Settings = {
    vertical: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    className: "lg:w-[152px] mr-[14px]",
    draggable: true,
    swipeToSlide: true,
    verticalSwiping: true,
    centerMode: false,
  };
  return (
    <div className={`flex flex-col-reverse lg:flex-row ${className}`}>
      {/* <div className="mr-[14px] flex lg:flex-col justify-start">
        {images.map((image, index) => (
          <ValidImage
            className="h-[106px] w-[111px] lg:w-[152px] lg:h-[167px] rounded-2.5xl object-cover lg:mb-[14px]"
            key={`image${index}`}
            src={image}
            alt={alt}
          />
        ))}
      </div> */}
      <Slider {...setting}>
        {images.map((image, index) => (
          <ValidImage
            className="h-[106px] w-[111px] lg:w-full lg:h-[167px] rounded-2.5xl object-cover lg:mb-[14px]"
            key={`image${index}`}
            src={image}
            alt={alt}
          />
        ))}
      </Slider>

      <ValidImage
        src={images[0]}
        alt={alt}
        className="w-full lg:w-[444px] lg:h-[530px] rounded-2.5xl object-cover object-center mb-3 lg:mb-0"
      />
    </div>
  );
};

export default GalleryProducts;
