import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCartDetails } from "../../context/useCartDetails";
const CartDetails = () => {
  const { cartProducts } = useContext(useCartDetails);
  return (
    <section className="absolute top-[100px] left-0 z-10 w-full md:left-[95%] md:max-w-2xl md:-translate-x-full">
      <div className="mx-8 rounded-md bg-white md:mx-8">
        <h4 className="px-4 py-6 text-lg font-semibold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-8 text-center">Your cart is empty</p>
        )}

        {cartProducts.map((product) => {
          return (
            <article className="grid grid-cols-[1fr_4fr_1fr] items-center gap-8 px-6 py-8 text-lg">
              <img
                key={product.id}
                src={product.img}
                className="rounded-md"
                alt="bread-image"
              ></img>
              <div>
                <p>{product.title}</p>
                <div>
                  <span>
                    ${product.price}x{product.quantity}
                  </span>
                  <span className="font-semibold">${product.total}</span>
                </div>
              </div>
              <button className="ml-auto">
                <FaTrashAlt className="hover:fill-yellow-600" />
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
