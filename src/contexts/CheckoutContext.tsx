import React from "react";
import { checkoutReducer } from "../reducers/checkoutReducer";
import { AddressFormData } from "../contexts/formContext";

export interface CheckoutContextType {
  checkout: AddressFormData;
  setCheckout: (checkout: CheckoutContextType["checkout"]) => void;
}

export const CheckoutContext = React.createContext<CheckoutContextType>({
  checkout: {
    cep: "",
    rua: "",
    cidade: "",
    estado: "",
    complemento: "",
    numero: "",
    paymentMethod: "creditCard",
  },
  setCheckout: () => {},
});

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(checkoutReducer, {
    checkout: {
      cep: "",
      rua: "",
      cidade: "",
      estado: "",
      complemento: "",
      numero: "",
      paymentMethod: "creditCard",
    },
  });

  function setCheckout(checkout: CheckoutContextType["checkout"]) {
    dispatch({
      type: "SET_CHECKOUT",
      payload: checkout,
    });
  }

  return (
    <CheckoutContext.Provider value={{ ...state, setCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
}
