import React from "react";
import { NavLink } from "react-router-dom";
import { AddressForm } from "../../components/AddressForm";
import { CartItem } from "../../components/CartItem";
import { PaymentSelectButtons } from "../../components/PaymentSelectButtons";
import styles from "./index.module.css";
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { cartContext } from "../../contexts/CartContext";
import { coffees } from "../../mocks/coffees";
import { Product } from "../../types/product";

export function Cart() {
  const { products } = React.useContext(cartContext);
  const [cartProducts, setCardProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const findProducts = coffees.filter((product) => {
      return products.find((item) => item.productId === product.id);
    });

    if (findProducts != null && findProducts.length > 0)
      setCardProducts(findProducts);
  }, [products]);

  return (
    <section className={styles.cartSection}>
      <div className={`container ${styles.cartContainer}`}>
        <div className={styles.orderInfoContainer}>
          <h3 className={styles.title}>Complete seu pedido</h3>
          <div className={styles.addressWrapper}>
            <div className={styles.addressInfo}>
              <MapPinLine size={22} color="var(--yellow-dark)" />
              <div className={styles.addressTitle}>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <AddressForm />
          </div>
          <div className={styles.paymentWrapper}>
            <div className={styles.paymentInfo}>
              <CurrencyDollar size={22} color="var(--purple)" />
              <div className={styles.paymentTitle}>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <PaymentSelectButtons />
          </div>
        </div>
        <div className={styles.orderSummaryContainer}>
          <h3 className={styles.title}>Cafés selecionados</h3>
          <div className={styles.orderSummary}>
            <div className={styles.cartItemsWrapper}>
              {cartProducts.map((product) => {
                return (
                  <>
                    <CartItem key={product.id} product={product} />
                    <div className={styles.line}></div>
                  </>
                );
              })}
            </div>
            <div className={styles.summaryWrapper}>
              <div className={styles.totalItems}>
                <p>Total de itens</p>
                <p>R$ 0,00</p>
              </div>
              <div className={styles.delivery}>
                <p>Entrega</p>
                <p>R$ 0,00</p>
              </div>
              <div className={styles.total}>
                <p>Total</p>
                <p>R$ 0,00</p>
              </div>
            </div>
            <NavLink to="/success">
              <button className={styles.confirmButton}>Confirmar Pedido</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
