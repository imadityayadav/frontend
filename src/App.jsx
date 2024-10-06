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
<<<<<<< HEAD
import women from './components/assets/banner_women.png';
import kids from './components/assets/banner_kids.png';
import AboutPage from "./pages/AboutPage";

=======

import women from "./components/assets/banner_women.png";
import kids from "./components/assets/banner_kids.png";
import AboutPage from "./pages/AboutPage";


import women from './components/assets/banner_women.png'
import kids from './components/assets/banner_kids.png'
import AboutPage from "./pages/AboutPage";




>>>>>>> 5514d15ffdeea5688d2df7d0723b7eba0c37ef34
function App() {
  return (
    <div className="relative pt-16">
      {/* Add padding to avoid content hiding under the fixed navbar */}
      <BrowserRouter>
<<<<<<< HEAD
        <Navbar/>
=======
        <Navbar />
>>>>>>> 5514d15ffdeea5688d2df7d0723b7eba0c37ef34
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}></Route>
          <Route path="/kids" element={<ShopCategory banner={kids} category="kids"/>}></Route>
          <Route path="/women" element={<ShopCategory banner={women} category="women"/>}></Route>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}></Route>
          </Route>
<<<<<<< HEAD
          <Route path="/about" element={<AboutPage/>} ></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
=======
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
>>>>>>> 5514d15ffdeea5688d2df7d0723b7eba0c37ef34
      </BrowserRouter>
    </div>
  );
}

export default App;