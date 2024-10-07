import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import men_banner from "./components/assets/banner_mens.png";
import women from "./components/assets/banner_women.png";
import kids from "./components/assets/banner_kids.png";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="relative pt-16">
      {/* Add padding to avoid content hiding under the fixed navbar */}
      <BrowserRouter>
        <Navbar /> {/* Assuming Navbar is the component for the navigation bar */}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids} category="kids" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women} category="women" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;