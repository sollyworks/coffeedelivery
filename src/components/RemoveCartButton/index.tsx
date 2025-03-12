import React from "react";
import styles from "./index.module.css";
import { Trash } from "@phosphor-icons/react";
import { cartContext } from "../../contexts/CartContext";

export function RemoveCartButton({ productId }: { productId: string }) {
  const { removeProduct } = React.useContext(cartContext);

  function handleRemoveProduct() {
    removeProduct(productId);
  }

  return (
    <button className={styles.removeButton} onClick={handleRemoveProduct}>
      <span className={styles.removeButtonWrapper}>
        <Trash size={16} fill="var(--purple)" />
        Remover
      </span>
    </button>
  );
}
