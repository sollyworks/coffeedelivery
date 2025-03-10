import styles from "./index.module.css";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import mainImage from "../../assets/main-store-image.png";

export function Home() {
  return (
    <section className={styles.mainSection}>
      <div className="container">
        <main className="flexContainer">
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora.
              </p>
            </div>
            <div className={styles.advantages}>
              <ul>
                <li>
                  <div className={`${styles.icon} ${styles.shopping}`}>
                    <ShoppingCart weight="fill" color="#fff" />
                  </div>
                  Compra simples e segura
                </li>
                <li>
                  <div className={`${styles.icon} ${styles.package}`}>
                    <Package weight="fill" color="#fff" />
                  </div>
                  Embalagem mantém o café intacto
                </li>
                <li>
                  <div className={`${styles.icon} ${styles.timer}`}>
                    <Timer weight="fill" color="#fff" />
                  </div>
                  Entrega rápida e rastreada
                </li>
                <li>
                  <div className={`${styles.icon} ${styles.coffee}`}>
                    <Coffee weight="fill" color="#fff" />
                  </div>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.mainImage}>
            <img src={mainImage} alt="" />
          </div>
        </main>
      </div>
    </section>
  );
}
