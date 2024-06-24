"use client";
import NextArrow from "@/components/arrows/next-arrow";
import PrevArrow from "@/components/arrows/prev-arrow";
import Loader from "@/components/loader/loader";
import ValidImage from "@/utils/valid-image";
import React, {
  FunctionComponent,
  WheelEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(images.length);
  }, [images]);

  const settingThumbails: Settings = {
    vertical: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    className:
      "md:w-[152px] lg:w-[132px] xl:w-[152px] md:mr-[14px] product-thumbail",
    draggable: false,
    swipeToSlide: true,
    verticalSwiping: true,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          slidesToShow: 5,
          slidesToScroll: 3,
          variableWidth: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          vertical: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
        },
      },
    ],
  };
  const settingsImage: Settings = {
    className:
      "w-full  lg:w-[390px] xl:w-[444px] rounded-2.5xl overflow-hidden",
    nextArrow: (
      <NextArrow classNameButton="h-full px-2 w-auto opacity-0 hover:opacity-100 hover:bg-grey-1 hover:bg-opacity-50" />
    ),
    prevArrow: (
      <PrevArrow classNameButton="h-full px-2 w-auto opacity-0 hover:opacity-100 hover:bg-grey-1 hover:bg-opacity-50" />
    ),
    infinite: false,
  };
  function stopBodyScroll(e: Event) {
    e.preventDefault();
  }
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();
  let sliderRef1 = useRef<Slider>(null);
  let sliderRef2 = useRef<Slider>(null);

  useEffect(() => {
    sliderRef1.current !== null && setNav1(sliderRef1.current);
    sliderRef2.current !== null && setNav2(sliderRef2.current);
  }, []);

  const wheelImage = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      sliderRef2.current?.slickNext();
    }
    if (e.deltaY < 0) {
      sliderRef2.current?.slickPrev();
    }
    return false;
  };
  return (
    <div className={`flex flex-col-reverse md:flex-row ${className}`}>
      <div
        className="max-w-full"
        onWheel={wheelImage}
        onMouseEnter={() =>
          document.body.addEventListener("wheel", stopBodyScroll, {
            passive: false,
          })
        }
        onMouseLeave={() =>
          document.body.removeEventListener("wheel", stopBodyScroll)
        }
      >
        <Slider {...settingThumbails} asNavFor={nav2} ref={sliderRef1}>
          {images.map((image, index) => (
            <ValidImage
              className="h-[106px] w-[111px] md:w-full md:h-[167px] rounded-2.5xl object-cover md:mb-[14px]  mr-3 md:mr-0"
              key={`image${index}`}
              src={image}
              alt={alt}
            />
          ))}
        </Slider>
      </div>

      <Slider {...settingsImage} asNavFor={nav1} ref={sliderRef2}>
        {images.map((img, index) => (
          <ValidImage
            key={`img${index}`}
            src={img}
            alt={alt}
            className="w-full  md:h-[530px] object-cover object-center mb-3 rounded-2.5xl"
          />
        ))}
      </Slider>
    </div>
  );
};

export default GalleryProducts;
