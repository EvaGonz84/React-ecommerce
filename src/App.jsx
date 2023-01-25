import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import CartDetailsProvider from "./context/useCartDetails";
const App = () => {
  return (
    <BrowserRouter>
      <CartDetailsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartDetailsProvider>
    </BrowserRouter>
  );
};

export default App;
