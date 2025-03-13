import "./App.css";
import { PagesRoute } from "./Routes/PagesRoute";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { FormProvider } from "./contexts/formContext";

function App() {
  return (
    <FormProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <PagesRoute />
        </BrowserRouter>
      </CartProvider>
    </FormProvider>
  );
}

export default App;
