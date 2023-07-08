import { createContext, useContext, useState } from "react";
import productsData from "../data";

const Products = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState({
    productsArr: productsData,
    cart: [],
  });
  return (
    <Products.Provider value={{ products, setProducts }}>
      {children}
    </Products.Provider>
  );
};

export const ProductsState = () => {
  return useContext(Products);
};

export default Context;
