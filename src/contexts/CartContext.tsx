import React from "react";
import { Cart, cartReducer } from "../reducers/CartReducer";

interface CartContext extends Cart {
  addToCart: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
}

export const cartContext = React.createContext<CartContext>({
  products: [],
  totalQuantity: 0,
  addToCart: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(cartReducer, {
    products: [],
    totalQuantity: 0,
  });

  function addToCart(productId: string, quantity: number) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { productId, quantity },
    });
  }

  function removeProduct(productId: string) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId, quantity: 0 },
    });
  }

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
