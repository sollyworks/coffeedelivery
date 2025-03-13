import React from "react";
import { checkoutReducer } from "../reducers/checkoutReducer";
import { AddressFormData } from "../contexts/formContext";

export interface CheckoutContextType {
  address: AddressFormData;
  setAddress: (address: AddressFormData) => void;
}

export const CheckoutContext = React.createContext<CheckoutContextType>({
  address: {
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    numero: "",
  },
  setAddress: () => {},
});

export function useCheckoutContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(checkoutReducer, {
    address: {
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
      numero: "",
    },
  });

  function setAddress(address: CheckoutContextType["address"]) {
    dispatch({
      type: "SET_ADDRESS",
      payload: address,
    });
  }

  return (
    <CheckoutContext.Provider value={{ ...state, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}
