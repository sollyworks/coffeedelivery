import React from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

interface CartContext extends CartState {
  totalQuantity: number;
  addToCart: (productId: string, quantity: number) => void;
}

export const cartContext = React.createContext<CartContext>({
  cart: [],
  totalQuantity: 0,
  addToCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = React.useState(0);

  function addToCart(productId: string, quantity: number) {
    setCart((cart) => {
      const existingItem = cart.find((item) => item.productId === productId);

      if (existingItem) {
        return cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...cart, { productId, quantity }];
    });
  }

  React.useEffect(() => {
    setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, addToCart, totalQuantity }}>
      {children}
    </cartContext.Provider>
  );
};
