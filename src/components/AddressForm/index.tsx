import styles from "./index.module.css";

export function AddressForm() {
  return (
    <form action="" className={styles.addressForm}>
      <div className={styles.oneInputWrapper}>
        <input type="text" placeholder="CEP" className={styles.cepInput} />
      </div>
      <div className={styles.oneInputWrapper}>
        <input type="text" placeholder="Rua" className={styles.streetInput} />
      </div>
      <div className={styles.multiInputWrapper}>
        <input
          type="number"
          placeholder="Número"
          className={styles.numberInput}
        />
        <div className={styles.complementWrapper}>
          <input
            type="text"
            placeholder="Complemento"
            className={styles.complementInput}
          />
          <span className={styles.complementLabel}>Opcional</span>
        </div>
      </div>
      <div className={styles.multiInputWrapper}>
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" className={styles.cityInput} />
        <input type="text" placeholder="UF" className={styles.ufInput} />
      </div>
    </form>
  );
}
