import React, { useContext, useRef, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "./assets/logo.png";
import cart from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ham from "./assets/ham.png";
import DarkModeToggle from "../pages/DarkModeToggle";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

        </div>
        <Link to="/login">
          <button className="px-4 py-2 bg-transparent text- font-semibold rounded-lg border border-gray-400 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon fontSize="large"/>
        </Link>
        <div className="flex justify-center items-center w-5 h-5 mt-[-10px] ml-[-25px] text-xs rounded-full bg-[#FF4141] text">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
