import ProductDetails from "../components/product/ProductDetails";
import TextProductHome from "../components/product/TextProductHome";
import SliderProduct from "../components/product/SliderProduct";
import { arrayImgs, arrayImgsSmall } from "../assets/images/images";

//Product object
const objectProduct = {
  id: 1,
  title: "Product title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 3,
  images: arrayImgs,
  smallImages: arrayImgsSmall,
};
const ProductPage = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] md:w-[80%] mx-auto pt-10">
        <SliderProduct
          images={objectProduct.images}
          smallImages={objectProduct.smallImages}
        />
        <ProductDetails objectProduct={objectProduct} />
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <TextProductHome text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      </section>
    </main>
  );
};

export default ProductPage;
