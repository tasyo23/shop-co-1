"use client";

import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ProductItem from "./productItem";
import { Product } from "@/types/product";
import Slider, { Settings } from "react-slick";

interface ProductItemsProps {
  products: Product[];
  count: number;
}

const ProductItems: FunctionComponent<ProductItemsProps> = ({
  products,
  count,
}) => {
  const sliderSettings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    className: "products-slider",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="">
        <div className="container mx-auto ">
          {products !== null ? (
            count > 5 ? (
              <Slider {...sliderSettings}>
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    imageClassName="h-[200px] lg:h-[298px] "
                    className="w-[198px] overflow-hidden"
                  />
                ))}
              </Slider>
            ) : (
              <div
                className={
                  "grid gap-x-5 " +
                  `${
                    count === 5
                      ? "grid-cols-5"
                      : count === 4
                      ? "grid-cols-4"
                      : "grid-cols-3"
                  }`
                }
              >
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    imageClassName="h-[200px] lg:h-[298px]"
                  />
                ))}
              </div>
            )
          ) : (
            <div>Loading......</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItems;
