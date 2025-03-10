import "./App.css";
import { PagesRoute } from "./Routes/PagesRoute";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PagesRoute />
    </BrowserRouter>
  );
}

export default App;
