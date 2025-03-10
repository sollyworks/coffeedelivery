import coffeeDelivery from "../../assets/coffedelivery-logo.svg";
import { CartButton } from "../CartButton";
import styles from "./index.module.css";
import { MapPin } from "@phosphor-icons/react";

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
          <CartButton variant="header" />
        </div>
      </header>
    </div>
  );
}
