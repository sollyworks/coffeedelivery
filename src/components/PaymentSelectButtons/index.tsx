import styles from "./index.module.css";
import { CreditCard, Bank, Money } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { AddressFormData } from "../../contexts/formContext";

export function PaymentSelectButtons() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AddressFormData>();
  const paymentOption = watch("paymentMethod");

  return (
    <>
      <form className={styles.paymentForm}>
        <label
          htmlFor="creditCard"
          className={`${styles.paymentOption} ${
            paymentOption === "creditCard" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            id="creditCard"
            value="creditCard"
            {...register("paymentMethod")}
          />
          <span>
            <CreditCard size={16} color="var(--purple)" />
            Cartão de Crédito
          </span>
        </label>

        <label
          htmlFor="debitCard"
          className={`${styles.paymentOption} ${
            paymentOption === "debitCard" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            id="debitCard"
            value="debitCard"
            {...register("paymentMethod")}
          />
          <span>
            <Bank size={16} color="var(--purple)" />
            Cartão de Débito
          </span>
        </label>

        <label
          htmlFor="money"
          className={`${styles.paymentOption} ${
            paymentOption === "money" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            id="money"
            value="money"
            {...register("paymentMethod")}
          />
          <span>
            <Money size={16} color="var(--purple)" />
            Dinheiro
          </span>
        </label>
      </form>
      <div>
        {errors.paymentMethod && (
          <p style={{ color: "red", fontSize: 12 }}>
            {errors && "Por favor, selecione uma opção de pagamento"}
          </p>
        )}
      </div>
    </>
  );
}
