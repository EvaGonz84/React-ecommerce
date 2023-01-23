import Button from "../button/Button";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <>
      <article className="flex flex-col justify-center gap-4 text-xl font-semibold tracking-wider leading-normal md:text-2xl">
        <h2 className="uppercase text-yellow-600 text-2xl md:text-3xl">
          Title
        </h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste sunt cum
          illo numquam aliquid, voluptas assumenda adipisci nostrum, iusto ad
          quo.
        </p>
        <div>
          <span className="text-2xl md:text-3xl font-bold">$3</span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-lg">
          <div className="flex justify-around items-center md:w-1/3 bg-yellow-600 font-bold p-1">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <Button text="Add to cart"></Button>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;
