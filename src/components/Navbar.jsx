import React, { useContext, useRef, useState } from "react";
import logo from "./assets/logo.png";
import cart from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ham from "./assets/ham.png";

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

  return (
    <div className="navbar fixed top-0 left-0 flex justify-between items-center p-4 px-7 shadow-md bg-white z-50 w-screen">
      <div className="flex items-center gap-2">
        <img className="w-10" src={logo} alt="Logo" />
        <p className="text-black text-lg md:text-2xl font-semibold">
          Shopper's Stop
        </p>
      </div>

      {/* Hamburger Icon */}
      <img
        className="block md:hidden w-8 cursor-pointer"
        src={ham}
        onClick={toggleMenu}
        alt="Menu"
      />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          <ul
            ref={menuRef}
            className="absolute top-0 left-0 right-0 bg-white p-4 flex flex-col gap-4 text-lg font-medium text-[#626262] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <li
              onClick={() => {
                setMenu("shop");
                closeMenu();
              }}
            >
              <Link to="/">Shop</Link>
              {menu === "shop" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
            </li>
            <li
              onClick={() => {
                setMenu("men");
                closeMenu();
              }}
            >
              <Link to="/men">Men</Link>
              {menu === "men" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
                closeMenu();
              }}
            >
              <Link to="/kids">Kids</Link>
              {menu === "kids" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
            </li>
            <li
              onClick={() => {
                setMenu("women");
                closeMenu();
              }}
            >
              <Link to="/women">Women</Link>
              {menu === "women" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
            </li>
            {/* New About Us Link */}
            <li
              onClick={() => {
                setMenu("about"); // Set menu to "about" when clicked
                closeMenu();
              }}
            >
              <Link to="/about">About Us</Link>
              {menu === "about" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
            </li>
            {/* Cart Icon for Mobile Menu */}
            <li
              onClick={() => {
                setMenu("cart"); // Set menu to "cart" when clicked
                closeMenu();
              }}
            >
              <Link to="/cart">
                <img className="w-8" src={cart} alt="Cart" />
              </Link>
              {menu === "cart" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
              <div className="flex justify-center items-center w-5 h-5 mt-[-10px] ml-[-10px] text-xs rounded-full bg-[#FF4141] text-white">
                {getTotalCartItems()}
              </div>
            </li>
            {/* Login Button */}
            <li>
              <Link to="/login">
                <button className="w-[200px] rounded-[8px] bg-[#FF4141] py-[8px] text-white font-medium">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-6">
          <Link to="/">
            <button
              onClick={() => setMenu("shop")}
              className={`text-black ${menu === "shop" ? "font-bold" : ""}`}
            >
              Shop
            </button>
          </Link>
          <Link to="/men">
            <button
              onClick={() => setMenu("men")}
              className={`text-black ${menu === "men" ? "font-bold" : ""}`}
            >
              Men
            </button>
          </Link>
          <Link to="/kids">
            <button
              onClick={() => setMenu("kids")}
              className={`text-black ${menu === "kids" ? "font-bold" : ""}`}
            >
              Kids
            </button>
          </Link>
          <Link to="/women">
            <button
              onClick={() => setMenu("women")}
              className={`text-black ${menu === "women" ? "font-bold" : ""}`}
            >
              Women
            </button>
          </Link>
          {/* New About Us Link */}
          <Link to="/about">
            <button
              onClick={() => setMenu("about")} // Set menu to "about" when clicked
              className={`text-black ${menu === "about" ? "font-bold" : ""}`}
            >
              About Us
            </button>
            {menu === "about" && (
              <hr className="w-full h-1 rounded-sm bg-[#FF4141]" />
            )}
          </Link>
        </div>
        <Link to="/login">
          <button className="px-4 py-2 bg-transparent text-black font-semibold rounded-lg border border-gray-400 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img
            className="w-8"
            src={cart}
            alt="Cart"
            onClick={() => setMenu("cart")} // Set menu to "cart" when clicked
          />
          {menu === "cart" && (
            <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
          )}
        </Link>
        <div className="flex justify-center items-center w-5 h-5 mt-[-10px] ml-[-25px] text-xs rounded-full bg-[#FF4141] text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
