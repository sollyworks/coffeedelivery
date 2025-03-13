import React from "react";
import { checkoutReducer } from "../reducers/checkoutReducer";

export interface CheckoutContextType {
  address: {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
    numero: string;
  };
  setAddress: (address: CheckoutContextType["address"]) => void;
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

    console.log(address);
  }

  return (
    <CheckoutContext.Provider value={{ ...state, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}
