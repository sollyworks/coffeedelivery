import React from "react";
import { Cart, cartReducer } from "../reducers/CartReducer";
import { coffees } from "../mocks/coffees";

interface CartContext extends Cart {
  addToCart: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
  decreaseQuantity: (productId: string, quantity: number) => void;
  increaseQuantity: (productId: string, quantity: number) => void;
  deliveryFee: 3.5;
  totalPrice: number;
}

export const cartContext = React.createContext<CartContext>({
  products: [],
  totalQuantity: 0,
  deliveryFee: 3.5,
  totalPrice: 0,
  addToCart: () => {},
  removeProduct: () => {},
  decreaseQuantity: () => {},
  increaseQuantity: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalPrice, setTotalPrice] = React.useState(0);

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

  function decreaseQuantity(productId: string, quantity: number) {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { productId, quantity },
    });
  }

  function increaseQuantity(productId: string, quantity: number) {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { productId, quantity },
    });
  }

  React.useEffect(() => {
    const prices = state.products.reduce((total, product) => {
      const coffee = coffees.find((c) => c.id === product.productId);
      return total + (coffee?.price || 0) * product.quantity;
    }, 0);
    setTotalPrice(prices + 3.5);
  }, [state.products]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        deliveryFee: 3.5,
        totalPrice,
        addToCart,
        removeProduct,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
