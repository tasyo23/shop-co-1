import { getProduct } from "@/services/products-service";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: FunctionComponent<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(+params.id);
  console.log(product);
  if (product == null) return <div>Not found</div>;
  return (
    <main>
      <div className="container mx-auto mb-9">Home Shop Men T-shirts</div>
      <div className="container mx-auto flex">
        <div className="flex">
          <div className="mr-[14px] flex lg:flex-col justify-between">
            {product.images.map((image, index) => (
              <Image
                src={image}
                alt={product.title}
                width={152}
                height={168}
                key={index}
                className="lg:w-[152px] lg:h-[167px] rounded-2.5xl"
              />
            ))}
          </div>
          {product.images.length > 0 && (
            <Image
              src={product.images[0]}
              alt={product.title}
              width={444}
              height={530}
              className="lg:w-[444px] lg:h-[530px] rounded-2.5xl"
            />
          )}
        </div>
        <div className=""></div>
      </div>
    </main>
  );
};

export default ProductPage;
