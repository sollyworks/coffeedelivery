import { QuantityInput } from "../QuantityInput";
import expresso from "../../assets/Expresso.png";
import styles from "./index.module.css";

export function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.contentWrapper}>
        <img src={expresso} alt="" className={styles.coffeeImage} />
        <div className={styles.info}>
          <p>Expresso Tradicional</p>
          <QuantityInput variant="cartItem" />
        </div>
      </div>
      <span className={styles.price}>
        <strong>R$ 9,90</strong>
      </span>
    </div>
  );
}
