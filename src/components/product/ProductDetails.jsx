import { useCartDetails } from "../../context/useCartDetails";
import { useContext, useState } from "react";

const ProductDetails = ({ objectProduct }) => {
  const { addCartProducts } = useContext(useCartDetails);
  const [count, setCount] = useState(0);

  //Functions that increment and decrement the counter
  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    addCartProducts({
      img: objectProduct.smallImages[0],
      id: objectProduct.id,
      title: objectProduct.title,
      price: objectProduct.price,
      quantity: count,
    });
    setCount(0);
  };
  return (
    <>
      <article className="flex flex-col justify-center gap-4 text-xl font-semibold tracking-wider leading-normal md:text-2xl">
        <h2 className="uppercase text-yellow-600 text-2xl md:text-3xl">
          {objectProduct.title}
        </h2>
        <p className="text-xl">{objectProduct.description}</p>
        <div>
          <span className="text-2xl md:text-3xl font-bold">
            {objectProduct.price}€
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-lg">
          <div className="flex justify-around items-center md:w-1/3 bg-yellow-600 font-bold p-2 rounded-md">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
          </div>
          {/*The product is the parameter of the function to be added. */}
          <button
            onClick={handleAddToCart}
            className="bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 text-white rounded-md p-2 md:p-0 md:w-1/3"
          >
            Add to cart
          </button>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;
