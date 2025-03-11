import React from "react";
import styles from "./index.module.css";
import { CreditCard, Bank, Money } from "@phosphor-icons/react";

type PaymentOption = "creditCard" | "debitCard" | "money";

export function PaymentSelectButton() {
  const [selectedOption, setSelectedOption] =
    React.useState<PaymentOption | null>(null);

  return (
    <form className={styles.paymentForm}>
      <label
        htmlFor="creditCard"
        className={`${styles.paymentOption} ${
          selectedOption === "creditCard" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="creditCard"
          id="creditCard"
          onChange={() => setSelectedOption("creditCard")}
          checked={selectedOption === "creditCard"}
        />
        <span>
          <CreditCard size={16} color="var(--purple)" />
          Cartão de Crédito
        </span>
      </label>

      <label
        htmlFor="debitCard"
        className={`${styles.paymentOption} ${
          selectedOption === "debitCard" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="debitCard"
          id="debitCard"
          onChange={() => setSelectedOption("debitCard")}
          checked={selectedOption === "debitCard"}
        />
        <span>
          <Bank size={16} color="var(--purple)" />
          Cartão de Débito
        </span>
      </label>

      <label
        htmlFor="money"
        className={`${styles.paymentOption} ${
          selectedOption === "money" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="money"
          id="money"
          onChange={() => setSelectedOption("money")}
          checked={selectedOption === "money"}
        />
        <span>
          <Money size={16} color="var(--purple)" />
          Dinheiro
        </span>
      </label>
    </form>
  );
}
