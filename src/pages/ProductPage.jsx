import ProductDetails from "../components/product/ProductDetails";
import TextProductHome from "../components/product/TextProductHome";
import SliderProduct from "../components/product/SliderProduct";
import { arrayImgs, arrayImgsSmall } from "../assets/images/images";

//Product object
const objectProduct = {
  id: 1,
  title: "Artisanal sourdough bread",
  description:
    "Our handcraft loave are made with the finest ingredients and slow-fermented for maximum flavor.",
  price: 6,
  images: arrayImgs,
  smallImages: arrayImgsSmall,
};
const ProductPage = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] md:w-[80%] mx-auto pt-2">
        <SliderProduct
          images={objectProduct.images}
          smallImages={objectProduct.smallImages}
        />
        <ProductDetails objectProduct={objectProduct} />
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <TextProductHome text="Experience the delicious, authentic flavor of sourdough bread with our rich, handcrafted loaves. Our sourdough is made from premium ingredients and slow-fermented to perfection, giving you a truly unique and unforgettable taste." />
      </section>
    </main>
  );
};

export default ProductPage;
