import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import styles from "./index.module.css";
import successPageIllustration from "../../assets/successPageIllustration.svg";

export function SuccessPage() {
  return (
    <section className={styles.successSection}>
      <div className={`container flexContainer ${styles.successContainer}`}>
        <div className={styles.successContentContainer}>
          <div className={styles.successTextContainer}>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>
          <div className={styles.successInfoContainer}>
            <ul>
              <li>
                <div className={`${styles.icon} ${styles.mapPin}`}>
                  <MapPin size={16} weight="fill" color="#fff" />
                </div>
                <div>
                  <p>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </div>
              </li>

              <li>
                <div className={`${styles.icon} ${styles.timer}`}>
                  <Timer size={16} weight="fill" color="#fff" />
                </div>
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </li>

              <li>
                <div className={`${styles.icon} ${styles.currencyDollar}`}>
                  <CurrencyDollar size={16} weight="fill" color="#fff" />
                </div>
                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>Cartão de Crédito</strong>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={successPageIllustration} alt="" />
        </div>
      </div>
    </section>
  );
}
