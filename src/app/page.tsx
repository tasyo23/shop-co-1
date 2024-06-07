import PopularProducts from "@/components/product/popularProducts";
import ProductsTopSelling from "@/components/product/productsTopSelling";
import OurCostumers from "@/components/main-page/costumers/our-costumers";

import BrowseStyle from "@/components/main-page/browse-style";
import Banner from "@/components/main-page/banner";
import Brands from "@/components/main-page/brands";

export default function Home() {
  return (
    <main>
      <Banner />
      <Brands />
      <PopularProducts />
      <ProductsTopSelling />
      <BrowseStyle />
      <OurCostumers className="mb-20" />
    </main>
  );
}
