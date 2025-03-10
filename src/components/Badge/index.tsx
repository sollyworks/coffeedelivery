import styles from "./index.module.css";

export function Badge({ quantity }: { quantity: number }) {
  return <span className={styles.badge}>{quantity}</span>;
}
