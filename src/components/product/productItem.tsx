import { Product } from "@/types/product";
import { FunctionComponent } from "react";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const img = product.images[0].replace(/\*|\[|\]|\"|\$/g, "");
  //   console.log(img);
  return (
    <div>
      <div className="rounded-2.5xl overflow-hidden mb-3">
        <Image src={img} width={500} height={500} alt="Picture of the author" />
      </div>
      <p className="text-lg font-bold mb-2 text-nowrap overflow-hidden text-ellipsis">
        {product.title}
      </p>
      <div className="flex">
        <span className="flex">
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
              fill="#FFC633"
            />
          </svg>
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
              fill="#FFC633"
            />
          </svg>
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
              fill="#FFC633"
            />
          </svg>
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
              fill="#FFC633"
            />
          </svg>
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
              fill="#FFC633"
            />
          </svg>
        </span>
        <span className="ml-3">4.5/5</span>
      </div>
      <p className="text-xl font-bold">
        <span> ${product.price}</span>
        {product.price < 260 && (
          <span className="ml-3 text-black text-opacity-40 line-through">
            $260
          </span>
        )}
      </p>
    </div>
  );
};

export default ProductItem;
