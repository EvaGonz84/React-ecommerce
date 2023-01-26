import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCartDetails } from "../../context/useCartDetails";
const CartDetails = () => {
  const { cartProducts, deleteCartProducts, totalQuantityProducts } =
    useContext(useCartDetails);

  return (
    <section className="absolute top-[100px] left-0 z-10 w-[95%] ml-2 bg-white md:left-[95%] md:max-w-2xl md:-translate-x-full border-2 border-[#e5e7eb] rounded-md">
      <div className="mx-8 rounded-md md:mx-8">
        <h1 className="px-4 py-6 text-xl font-semibold">Cart</h1>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-8 text-lg font-semibold text-center">
            Your cart is empty
          </p>
        )}

        {cartProducts.map((product) => {
          return (
            <article
              key={product.id}
              className="grid grid-cols-[1fr_4fr_1fr] items-center gap-8 px-6 py-8 text-lg"
            >
              <img
                src={product.img}
                className="rounded-md"
                alt="bread-image"
              ></img>
              <div>
                <p className="font-semibold">{product.title}</p>
                <div className="flex justify-between">
                  <span>
                    {product.price}€ x {product.quantity}
                  </span>
                  <span className="font-semibold">
                    Total {totalQuantityProducts}€
                  </span>
                </div>
              </div>
              <button className="ml-auto">
                <FaTrashAlt
                  onClick={deleteCartProducts}
                  className="hover:fill-yellow-600"
                />
              </button>
            </article>
          );
        })}

        {cartProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="w-full rounded-md bg-yellow-600 p-2 font-semibold transition-all hover:bg-yellow-500 text-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartDetails;
