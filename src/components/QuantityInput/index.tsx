import React from "react";
import styles from "./index.module.css";
import { CartButton } from "../CartButton";
import { RemoveCartButton } from "../RemoveCartButton";
import { Plus, Minus } from "@phosphor-icons/react";
import { cartContext } from "../../contexts/CartContext";

type quantityInputProps = {
  variant: "productCard" | "cartItem";
  coffeeId: string;
};

export function QuantityInput({ variant, coffeeId }: quantityInputProps) {
  const { products } = React.useContext(cartContext);

  const [quantity, setQuantity] = React.useState(() => {
    const existingItem = products.find((item) => item.productId === coffeeId);
    return existingItem ? existingItem.quantity : 0;
  });

  const { addToCart } = React.useContext(cartContext);

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  function handleIncrement() {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (variant === "productCard" && quantity > 0) {
      addToCart(coffeeId, quantity);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.quantityForm}>
      <div className={styles.quantityWrapper}>
        <button
          type="button"
          onClick={handleDecrement}
          className={styles.controlButton}
        >
          <span>
            <Minus size={10} color="var(--purple)" weight="bold" />
          </span>
        </button>
        <input
          type="number"
          value={quantity}
          min={0}
          max={10}
          id="quantityInput"
          onChange={({ target }) => setQuantity(Number(target.value))}
          onBlur={({ target }) => setQuantity(Number(target.value))}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className={styles.controlButton}
        >
          <span>
            <Plus size={10} color="var(--purple)" weight="bold" />
          </span>
        </button>
      </div>
      {variant === "cartItem" && <RemoveCartButton />}

      {variant === "productCard" && (
        <CartButton
          variant="productCard"
          disabled={quantity > 10 || quantity === 0}
        />
      )}
    </form>
  );
}
