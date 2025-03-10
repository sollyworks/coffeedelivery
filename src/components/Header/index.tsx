import coffeeDelivery from "../../assets/coffedelivery-logo.svg";
import styles from "./index.module.css";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <div className="container">
      <header className={`${styles.header} flexContainer`}>
        <div>
          <img src={coffeeDelivery} alt="" />
        </div>
        <div className={styles.actions}>
          <span className={styles.location}>
            <MapPin weight="fill" color="var(--purple)" /> Porto Alegre, RS
          </span>
          <button>
            <ShoppingCart weight="fill" color="var(--yellow-dark)" />
          </button>
        </div>
      </header>
    </div>
  );
}
