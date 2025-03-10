import React from "react";
import styles from "./index.module.css";
import { ShoppingCart } from "@phosphor-icons/react";

export function QuantityInput() {
  const [quantity, setQuantity] = React.useState(0);

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
  }

  return (
    <form onSubmit={handleSubmit} className={styles.quantityForm}>
      <div className={styles.quantityWrapper}>
        <button
          type="button"
          onClick={handleDecrement}
          className={styles.controlButton}
        >
          -
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
          +
        </button>
      </div>
      <button
        type="submit"
        className={styles.cartButton}
        disabled={quantity > 10 || quantity === 0}
      >
        <ShoppingCart weight="fill" color="#fff" size={20} />
      </button>
    </form>
  );
}
