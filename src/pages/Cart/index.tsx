import React from "react";
import { AddressForm } from "../../components/AddressForm";
import { CartItem } from "../../components/CartItem";
import { PaymentSelectButtons } from "../../components/PaymentSelectButtons";
import styles from "./index.module.css";
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { cartContext } from "../../contexts/CartContext";
import { coffees } from "../../mocks/coffees";
import { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { AddressFormData } from "../../contexts/formContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { products, deliveryFee, totalPrice } = React.useContext(cartContext);
  const { setCheckout } = React.useContext(CheckoutContext);
  const { handleSubmit } = useFormContext<AddressFormData>();
  const [cartProducts, setCardProducts] = React.useState<Product[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const findProducts = coffees.filter((product) => {
      return products.find((item) => item.productId === product.id);
    });

    setCardProducts(findProducts);
  }, [products]);

  function calculateTotal() {
    const total = products
      .map((product) => {
        const cartProduct = cartProducts.find(
          (item) => item.id === product.productId
        );
        return cartProduct ? product.quantity * cartProduct.price : 0;
      })
      .reduce((total, price) => total + price, 0);

    return formatCurrency(total);
  }

  const handleAddress: SubmitHandler<AddressFormData> = (data) => {
    setCheckout(data);
    navigate("/success");
  };

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
                  <div key={product.id}>
                    <CartItem product={product} />
                    <div className={styles.line}></div>
                  </div>
                );
              })}
            </div>
            <div className={styles.summaryWrapper}>
              <div className={styles.totalItems}>
                <p>Total de itens</p>
                <p>R$ {calculateTotal()}</p>
              </div>
              <div className={styles.delivery}>
                <p>Entrega</p>
                <p>R$ {formatCurrency(deliveryFee)}</p>
              </div>
              <div className={styles.total}>
                <p>Total</p>
                <p>R$ {formatCurrency(totalPrice)}</p>
              </div>
            </div>
            <button
              className={styles.confirmButton}
              onClick={handleSubmit(handleAddress)}
            >
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
