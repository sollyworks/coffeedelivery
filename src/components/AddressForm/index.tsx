import styles from "./index.module.css";
import { useFormContext } from "react-hook-form";
import { AddressFormData } from "../../contexts/formContext";

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressFormData>();

  return (
    <form className={styles.addressForm}>
      <div className={styles.oneInputWrapper}>
        <input
          {...register("cep")}
          type="text"
          placeholder="CEP"
          className={styles.cepInput}
        />
        {errors.cep && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.cep.message}</p>
        )}
      </div>
      <div className={styles.oneInputWrapper}>
        <input
          {...register("rua")}
          type="text"
          placeholder="Rua"
          className={styles.streetInput}
        />
        {errors.rua && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.rua.message}</p>
        )}
      </div>
      <div className={styles.multiInputWrapper}>
        <input
          {...register("numero")}
          type="number"
          placeholder="Número"
          className={styles.numberInput}
        />
        {errors.numero && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.numero.message}</p>
        )}
        <div className={styles.complementWrapper}>
          <input
            {...register("complemento")}
            type="text"
            placeholder="Complemento"
            className={styles.complementInput}
          />

          <span className={styles.complementLabel}>Opcional</span>
        </div>
      </div>
      <div className={styles.multiInputWrapper}>
        <input
          {...register("cidade")}
          type="text"
          placeholder="Cidade"
          className={styles.cityInput}
        />
        <input
          {...register("estado")}
          type="text"
          placeholder="UF"
          className={styles.ufInput}
        />
      </div>
    </form>
  );
}
