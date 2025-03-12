export interface Cart {
  products: { productId: string; quantity: number }[];
  totalQuantity: number;
}

function calculateTotalQuantity(
  products: { productId: string; quantity: number }[]
) {
  return products.reduce((total, product) => total + product.quantity, 0);
}

export function cartReducer(state: Cart, action: any) {
  if (action.type === "ADD_TO_CART") {
    const hasProduct = state.products.find(
      (product) => product.productId === action.payload.productId
    );

    let updatedProducts;
    if (hasProduct) {
      updatedProducts = state.products.map((product) => {
        return product.productId === action.payload.productId
          ? {
              ...product,
              quantity: action.payload.quantity,
            }
          : product;
      });
    } else {
      updatedProducts = [...state.products, action.payload];
    }

    return {
      ...state,
      products: updatedProducts,
      totalQuantity: calculateTotalQuantity(updatedProducts),
    };
  }

  return state;
}
