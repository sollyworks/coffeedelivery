import { QuantityInput } from "../QuantityInput";
import styles from "./index.module.css";
import { Product } from "../../types/product";
import { coffeeImages } from "../../assets/index";
import { formatCurrency } from "../../utils/formatCurrency";

export function CartItem({ product }: { product: Product }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.contentWrapper}>
        <img
          src={coffeeImages[product.image]}
          alt={product.name}
          className={styles.coffeeImage}
        />
        <div className={styles.info}>
          <p>{product.name}</p>
          <QuantityInput variant="cartItem" coffeeId={product.id} />
        </div>
      </div>
      <span className={styles.price}>
        <strong>R$ {formatCurrency(product.price)}</strong>
      </span>
    </div>
  );
}
