import { CheckoutContextType } from "../contexts/CheckoutContext";

type CheckoutState = {
  checkout: CheckoutContextType["checkout"];
};

type CheckoutAction = {
  type: "SET_CHECKOUT";
  payload: CheckoutContextType["checkout"];
};

export function checkoutReducer(state: CheckoutState, action: CheckoutAction) {
  switch (action.type) {
    case "SET_CHECKOUT":
      return {
        ...state,
        checkout: action.payload,
      };
    default:
      return state;
  }
}
