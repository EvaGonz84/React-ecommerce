import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addCartProducts = (product) => {
    //If the array is empty & quantity is 0 it is added to the product
    if (cartProducts.length === 0 && product.quantity > 0) {
      return setCartProducts([...cartProducts, product]);
    }
    //Checks if the product matches the id and adds the quantity to it
    setCartProducts(
      cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };
  const deleteCartProducts = () => {
    setCartProducts([]);
  };

  const totalQuantityProducts = cartProducts.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  return (
    <useCartDetails.Provider
      value={{
        cartProducts,
        addCartProducts,
        deleteCartProducts,
        totalQuantityProducts,
      }}
    >
      {children}
    </useCartDetails.Provider>
  );
};
