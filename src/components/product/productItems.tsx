"use client";

import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ProductItem from "./productItem";
import { Product } from "@/types/product";

interface ProductItemsProps {
  products: Product[];
  count: number;
}

const ProductItems: FunctionComponent<ProductItemsProps> = ({
  products,
  count,
}) => {
  return (
    <>
      <div className="">
        <div className="container mx-auto ">
          {products !== null ? (
            <div
              className={
                "grid gap-x-5 " +
                `${
                  count === 5
                    ? "grid-cols-5"
                    : count === 4
                    ? "grid-cols-4"
                    : count === 3
                    ? "grid-cols-3"
                    : count === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`
              }
            >
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div>Loading......</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItems;
