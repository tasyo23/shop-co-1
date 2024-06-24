import Counter from "@/components/counter/counter";
import Rating from "@/components/costumers/rating";
import GalaryProducts from "@/components/product-page-components/gallery/galleryProducts";
import PopularProducts from "@/components/product/popularProducts";
import ProductColor from "@/components/product/product-color";
import ProductSize from "@/components/product/product-size";
import Tab from "@/components/tabs/tab";
import Tabs from "@/components/tabs/tabs";
import { getProduct } from "@/services/products-service";
import { Product } from "@/types/product";
import ValidImage from "@/utils/valid-image";
import { FunctionComponent } from "react";
import ReviewProduct from "@/components/costumers/reviews-product";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: FunctionComponent<ProductPageProps> = async ({ params }) => {
  const product: Product | null = await getProduct(+params.id);

  if (product == null) return <div>Not found</div>;
  return (
    <main>
      <div className="container mx-auto mb-9">Home Shop Men T-shirts</div>
      <div className="container mx-auto flex flex-col lg:flex-row items-startl">
        <GalaryProducts
          alt={product.title}
          images={product.images}
          className="lg:mr-10 flex-grow-2 items-start max-w-ful mb-[6px]"
        />
        <div className=" flex-shrink-[99] ">
          <p className="text-xl lg:text-2xl xl:text-4xl font-head font-bold mb-3 lg:mb-3.5">
            {product.title}
          </p>
          <div className="flex mb-3 lg:mb-3.5">
            <Rating count={4.5} />
            <span className="ml-3 text-sm lg:text-base">4.5/5</span>
          </div>
          <p className="mb-5 flex items-center">
            <span className="xl lg:text-2xl font-bold mr-3">
              {product.price}$
            </span>
            {product.price < 270 && (
              <>
                <span className="xl lg:text-2xl font-bold text-black text-opacity-30 line-through mr-[10px] lg:mr-3">
                  270$
                </span>
                <span className="h-[31px] lg:h-[34px] w-[62px] lg:w-[72px] flex items-center justify-center text-magente bg-magente bg-opacity-10 rounded-full text-sm lg:text-base">
                  {Math.ceil(100 - (product.price / 270) * 100)}%
                </span>
              </>
            )}
          </p>
          <p className=" pb-6 border-b text-black text-opacity-6">
            {product.description}
          </p>

          <ProductColor
            className="py-6 border-b"
            colors={["red", "black", "green", "grey"]}
            currentColor="black"
          />

          <ProductSize
            className="pt-6 pb-3 border-b"
            defaulttSize="Small"
            sizes={["Small", "Medium", "Large", "X-Large"]}
          />
          <div className="pt-6 flex">
            <Counter maxCount={10} countDefault={1} />
            <button className="h-[52px] ml-5 bg-black w-full text-white rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Tabs className="container mx-auto mt-14">
        <Tab label="Product Details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            molestie aliquet quam, eget semper velit tincidunt nec. Donec est
            felis, consequat a lobortis eget, aliquam sagittis justo. Ut gravida
            nulla eu velit pellentesque sagittis. Donec vel dapibus mauris. Cras
            at arcu ac magna vehicula blandit. Nullam non lorem est. Proin eget
            convallis ante. Duis sit amet est iaculis sapien ullamcorper dictum.
            Cras dignissim hendrerit dolor eget bibendum. Etiam at ex non sem
            interdum rutrum a vitae ex. Vestibulum elementum, eros nec lobortis
            scelerisque, lacus sem consectetur sem, sit amet molestie quam arcu
            non elit. Praesent id semper sapien, ut placerat lacus.
          </p>
          <p>
            Proin efficitur consequat tristique. Pellentesque id felis a metus
            malesuada ornare eget id massa. Curabitur eget sagittis nibh, in
            vulputate neque. Nulla luctus mi aliquet, fermentum erat ac, mollis
            lorem. Morbi tincidunt libero auctor libero efficitur, eu tristique
            ante pharetra. Mauris a ligula nunc. Fusce tincidunt purus ex, eget
            malesuada quam sollicitudin id.
          </p>
          <p>
            Morbi sed faucibus mi. Vivamus porttitor a ex gravida iaculis.
            Vestibulum at tortor leo. Curabitur consectetur volutpat augue,
            commodo accumsan neque iaculis vel. Aliquam a tempus nulla. Sed
            ultricies ultrices velit a fermentum. Aliquam urna purus, laoreet ac
            fringilla non, condimentum auctor sem. Vivamus eget auctor nunc,
            eget hendrerit massa. Etiam venenatis ultricies purus, non viverra
            lacus. Morbi maximus, est sit amet pharetra interdum, nisl libero
            tempor ex, a viverra est sapien a ipsum. Ut euismod, urna at varius
            mattis, libero ex tristique arcu, eget vulputate erat ante sit amet
            ex.
          </p>
          <p>
            Nullam sollicitudin quam augue. Etiam et semper dui. Mauris ut
            lectus et nisi pharetra laoreet a vel urna. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus dignissim id massa id hendrerit. In eget eleifend
            diam, nec tristique lacus. Maecenas accumsan, tortor non vulputate
            malesuada, leo sem vehicula diam, vitae feugiat urna ipsum non
            tellus.
          </p>
          <p>
            Morbi quam nunc, efficitur et pretium id, cursus a quam. Aliquam id
            sollicitudin nisi. Nunc ac elit turpis. Vivamus ac pharetra velit.
            Proin et augue enim. Integer sollicitudin interdum lacus, et
            ultrices metus eleifend vel. Nunc sollicitudin nec velit eu feugiat.
            Sed malesuada dui nec erat volutpat, in aliquam eros luctus. Aliquam
            erat volutpat. Etiam sollicitudin est a tincidunt tristique. Sed
            dictum finibus urna, id gravida justo ornare ut.
          </p>
        </Tab>
        <Tab label="Rating & Reviews">
          <ReviewProduct />
        </Tab>
        <Tab label="FAQs">
          <p>
            Proin efficitur consequat tristique. Pellentesque id felis a metus
            malesuada ornare eget id massa. Curabitur eget sagittis nibh, in
            vulputate neque. Nulla luctus mi aliquet, fermentum erat ac, mollis
            lorem. Morbi tincidunt libero auctor libero efficitur, eu tristique
            ante pharetra. Mauris a ligula nunc. Fusce tincidunt purus ex, eget
            malesuada quam sollicitudin id.
          </p>
          <p>
            Morbi sed faucibus mi. Vivamus porttitor a ex gravida iaculis.
            Vestibulum at tortor leo. Curabitur consectetur volutpat augue,
            commodo accumsan neque iaculis vel. Aliquam a tempus nulla. Sed
            ultricies ultrices velit a fermentum. Aliquam urna purus, laoreet ac
            fringilla non, condimentum auctor sem. Vivamus eget auctor nunc,
            eget hendrerit massa. Etiam venenatis ultricies purus, non viverra
            lacus. Morbi maximus, est sit amet pharetra interdum, nisl libero
            tempor ex, a viverra est sapien a ipsum. Ut euismod, urna at varius
            mattis, libero ex tristique arcu, eget vulputate erat ante sit amet
            ex.
          </p>
        </Tab>
      </Tabs>
      <PopularProducts />
    </main>
  );
};

export default ProductPage;
