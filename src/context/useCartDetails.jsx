import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addCartProducts = (product) => {
    //If the array is empty it is added to the product
    if (cartProducts.length === 0) {
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
  const deleteCartProducts = () => {};

  return (
    <useCartDetails.Provider
      value={{ cartProducts, addCartProducts, deleteCartProducts }}
    >
      {children}
    </useCartDetails.Provider>
  );
};
