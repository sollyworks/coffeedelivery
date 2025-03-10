import styles from "./index.module.css";
import { Product } from "../../types/product";
import { coffeeImages } from "../../assets";

export function ProductCard({ coffee }: { coffee: Product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={coffeeImages[coffee.image]}
          alt={coffee.name}
          className={styles.coffeeImage}
        />
      </div>
      <div className={styles.tags}>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.titleWrapper}>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>
          R$ <strong>{coffee.price}</strong>
        </span>
        <div>
          <button type="button">Comprar</button>
        </div>
      </div>
    </div>
  );
}
