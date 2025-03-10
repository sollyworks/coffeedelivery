import coffeeDelivery from "../../assets/coffedelivery-logo.svg";
import { CartButton } from "../CartButton";
import styles from "./index.module.css";
import { MapPin } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="container">
      <header className={`${styles.header} flexContainer`}>
        <div>
          <NavLink to="/">
            <img src={coffeeDelivery} alt="" />
          </NavLink>
        </div>
        <div className={styles.actions}>
          <span className={styles.location}>
            <MapPin weight="fill" color="var(--purple)" /> Porto Alegre, RS
          </span>
          <NavLink to="/cart">
            <CartButton variant="header" />
          </NavLink>
        </div>
      </header>
    </div>
  );
}
