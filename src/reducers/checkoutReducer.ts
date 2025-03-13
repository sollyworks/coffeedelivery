import { CheckoutContextType } from "../contexts/CheckoutContext";

type CheckoutState = {
  address: CheckoutContextType["address"];
};

type CheckoutAction = {
  type: "SET_ADDRESS";
  payload: CheckoutContextType["address"];
};

export function checkoutReducer(state: CheckoutState, action: CheckoutAction) {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
}
