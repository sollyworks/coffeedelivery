import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { SuccessPage } from "../pages/Success";

export function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}
