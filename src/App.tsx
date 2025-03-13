import "./App.css";
import { PagesRoute } from "./Routes/PagesRoute";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { FormProvider } from "./contexts/formContext";
import { CheckoutProvider } from "./contexts/CheckoutContext";

function App() {
  return (
    <CheckoutProvider>
      <FormProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <PagesRoute />
          </BrowserRouter>
        </CartProvider>
      </FormProvider>
    </CheckoutProvider>
  );
}

export default App;
