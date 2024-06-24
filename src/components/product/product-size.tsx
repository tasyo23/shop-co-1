"use client";
import { FunctionComponent, useState } from "react";

interface ProductSizeProps {
  className?: string;
  sizes: string[];
  defaulttSize: string;
}

const ProductSize: FunctionComponent<ProductSizeProps> = ({
  className,
  sizes,
  defaulttSize,
}) => {
  const [currentSize, setCurrentSize] = useState(defaulttSize);
  return (
    <div className={`${className}`}>
      <p className="text-black text-opacity-60 mb-4">Choose Size</p>
      <div className="flex flex-wrap">
        {sizes.map((size) => (
          <label
            key={size}
            className={`py-3 px-6 rounded-full mr-3 cursor-pointer mb-3 ${
              currentSize == size
                ? "bg-black text-white"
                : "bg-grey text-black text-opacity-60"
            }`}
          >
            {size}
            <input
              type="radio"
              defaultChecked={currentSize == size}
              name="product-size"
              value={size}
              className="hidden"
              onChange={(e) => setCurrentSize(e.target.value)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductSize;
