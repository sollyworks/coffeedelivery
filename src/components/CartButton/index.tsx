import { ShoppingCart } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Badge } from "../Badge";

type CartButtonProps = React.ComponentProps<"button"> & {
  variant: "header" | "productCard";
};

export function CartButton({ variant, ...props }: CartButtonProps) {
  if (variant === "header") {
    return (
      <button {...props} className={styles.cartButtonHeader}>
        <ShoppingCart weight="fill" color="var(--yellow-dark)" size={20} />
        <Badge quantity={10} />
      </button>
    );
  }

  if (variant === "productCard") {
    return (
      <button {...props} className={styles.cartButtonProductCard}>
        <ShoppingCart weight="fill" color="#fff" size={20} />
      </button>
    );
  }

  return null;
}
