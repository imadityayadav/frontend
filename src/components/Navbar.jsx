import React, { useContext, useRef, useState, useEffect } from "react"; // Added useEffect
import logo from "./assets/logo.png";
import cart from "./assets/cart_icon.png";
import search from "./assets/search.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ham from "./assets/ham.png";
import DarkModeToggle from "../pages/DarkModeToggle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importing the icon

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and toggle `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setTimeout(() => {
      setIsLoginOpen(false);
      navigate(0); // This will refresh the page
    }, 500);
  };

  const handleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-70 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <img className="w-10" src={logo} alt="Logo" />
        <p className="text- text-lg md:text-2xl font-semibold">
          Shopper's Stop
        </p>
      </div>

      <img
        className="block md:hidden w-8 cursor-pointer"
        src={ham}
        onClick={toggleMenu}
        alt="Menu"
      />

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
              <Link to="/">
                <span
                  className={`hover:text-[#FF4141] transition duration-300 ease-in-out ${
                    menu === "shop" ? "text-[#FF4141]" : ""
                  }`}
                >
                  Shop
                </span>
              </Link>
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
              <Link to="/men">
                <span
                  className={`hover:text-[#FF4141] transition duration-300 ease-in-out ${
                    menu === "men" ? "text-[#FF4141]" : ""
                  }`}
                >
                  Men
                </span>
              </Link>
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
              <Link to="/kids">
                <span
                  className={`hover:text-[#FF4141] transition duration-300 ease-in-out ${
                    menu === "kids" ? "text-[#FF4141]" : ""
                  }`}
                >
                  Kids
                </span>
              </Link>
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
              <Link to="/women">
                <span
                  className={`hover:text-[#FF4141] transition duration-300 ease-in-out ${
                    menu === "women" ? "text-[#FF4141]" : ""
                  }`}
                >
                  Women
                </span>
              </Link>
              {menu === "women" && (
                <hr className="w-4/5 h-1 rounded-sm bg-[#FF4141]" />
              )}
            </li>
            <li>
              <Link to="/login">
                <button className="w-full rounded-[8px] bg-[#399bfd] py-[8px] text-white font-medium">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden md:flex items-center gap-6">
        {/* Search Input */}
        <div className="flex items-center">
          <img
            className="w-6 h-6 cursor-pointer"
            src={search}
            onClick={handleSearch}
            alt="Search"
          />
          {isSearchOpen && (
            <form
              onSubmit={handleSearchSubmit}
              className="relative ml-2 flex items-center"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </form>
          )}
        </div>

        {/* Menu items */}
        <div className="flex gap-6">
          <DarkModeToggle />
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
        </div>

        <Link to="/login">
          <button className="px-4 py-2 bg-transparent text-black font-semibold rounded-lg border border-gray-400 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon fontSize="large" />
        </Link>
        <div className="flex justify-center items-center w-5 h-5 mt-[-10px] ml-[-25px] text-xs rounded-full bg-[#FF4141] text">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
