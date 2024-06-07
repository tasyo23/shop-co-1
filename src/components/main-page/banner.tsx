import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/images/banner-img.png";
import { url } from "inspector";
interface BannerProps {}

const Banner: FunctionComponent<BannerProps> = () => {
  const bgImg = bannerImage.src;
  return (
    <div className="bg-grey-1">
      <div
        className={`container mx-auto flex justify-between items-center bg-no-repeat bg-bottom md:bg-right-bottom md:py-10  pb-[415px] lg:pt-26  lg:pb-29 bg-70% md:bg-58% lg:bg-contain `}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="md:max-w-[460px]  lg:max-w-[550px] xl:max-w-[596px]">
          <h1 className="mb-6">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="text-opacity-60 text-black mt-8 mb-7">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href="/products"
            className="bg-black text-white py-4 w-[210px] flex justify-center rounded-full mt-7 mb-12"
          >
            Shop Now
          </Link>
          <div className="flex flex-wrap justify-center xl:justify-start xl:flex-nowrap">
            <div className="after:content-[''] flex after:block after:w-[1px] after:h-full after:bg-black after:opacity-10 after:mx-8">
              <div>
                <p className="text-4xl font-bold">200+</p>
                <p className="text-black text-opacity-60 -mt-1">
                  International Brands
                </p>
              </div>
            </div>
            <div className="after:content-[''] flex after:block after:w-[1px] after:h-full after:bg-black after:opacity-10 after:mx-8">
              <div>
                <p className="text-4xl font-bold">2,000+</p>
                <p className="text-black text-opacity-60 -mt-1">
                  High-Quality Products
                </p>
              </div>
            </div>
            <div className=" ">
              <div>
                <p className="text-4xl font-bold">30,000+</p>
                <p className="text-black text-opacity-60 -mt-1">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
