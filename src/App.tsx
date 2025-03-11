import "./App.css";
import { PagesRoute } from "./Routes/PagesRoute";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <PagesRoute />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
