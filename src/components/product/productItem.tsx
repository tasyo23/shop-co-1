import { Product } from "@/types/product";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { validateImage } from "@/functions/validateImage";
import noImage from "@/assets/images/not-found.webp";
import ValidImage from "@/utils/valid-image";
import Rating from "../costumers/rating";

interface ProductItemProps {
  product: Product;
  imageClassName?: string;
  className?: string;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({
  product,
  imageClassName,
  className,
}) => {
  const img = validateImage(product.images[0]);

  return (
    <Link
      href={`/products/${product.id}`}
      className={`mx-[10px] block ${className}`}
    >
      <div
        className={`rounded-2.5xl overflow-hidden mb-3 ${imageClassName} bg-grey-2`}
      >
        <ValidImage
          src={product.images[0]}
          alt={product.title}
          className="max-h-full h-full max-w-full object-cover"
        />
      </div>
      <p className="text-base lg:text-lg font-bold mb-2 text-nowrap overflow-hidden text-ellipsis ">
        {product.title}
      </p>
      <div className="flex">
        <Rating count={3.5} />
        <span className="ml-3 text-sm">4.5/5</span>
      </div>
      <p className="text-lg lg:text-xl font-bold">
        <span> ${product.price}</span>
        {product.price < 260 && (
          <span className="ml-3 text-black text-opacity-40 line-through">
            $260
          </span>
        )}
      </p>
    </Link>
  );
};

export default ProductItem;
