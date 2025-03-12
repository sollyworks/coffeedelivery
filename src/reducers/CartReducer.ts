export interface Cart {
  products: { productId: string; quantity: number }[];
  totalQuantity: number;
}

interface reducerAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: { productId: string; quantity: number };
}

function calculateTotalQuantity(
  products: { productId: string; quantity: number }[]
) {
  return products.reduce((total, product) => total + product.quantity, 0);
}

export function cartReducer(state: Cart, action: reducerAction) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const hasProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );

      let updatedProducts;
      if (hasProduct) {
        updatedProducts = state.products.map((product) => {
          return product.productId === action.payload.productId
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product;
        });
      } else {
        updatedProducts = [...state.products, action.payload];
      }

      return {
        products: updatedProducts,
        totalQuantity: calculateTotalQuantity(updatedProducts),
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedProducts = state.products.filter(
        (product) => product.productId !== action.payload.productId
      );
      return {
        products: updatedProducts,
        totalQuantity: calculateTotalQuantity(updatedProducts),
      };
    }
    default: {
      return state;
    }
  }
}
