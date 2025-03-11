import styles from "./index.module.css";
import { Trash } from "@phosphor-icons/react";

export function RemoveCartButton() {
  return (
    <button className={styles.removeButton}>
      <span className={styles.removeButtonWrapper}>
        <Trash size={16} fill="var(--purple)" />
        Remover
      </span>
    </button>
  );
}
