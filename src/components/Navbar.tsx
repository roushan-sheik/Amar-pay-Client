/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Moon, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
 
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = useAppSelector((store)=> store.cart.products)
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white rounded-sm px-3">
  <nav className="container mx-auto flex items-center justify-between space-x-10 py-4">
    <Link to={"/"} className="text-white font-bold text-lg">
      Amar Pay
    </Link>

    <div className="hidden md:flex items-center space-x-5">
      <ul className="flex items-center space-x-5">
        <li>
          <Link
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
            to={"/products"}
          >
            Products
          </Link>
        </li>
        <li>
          <a
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
            href="#"
          >
            About
          </a>
        </li>
        <li className="relative">
          <Link
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
            to={"/cart"}
          >
            <ShoppingCart size={24} />
          </Link>
          <span className="rounded-full absolute top-[-10px] left-[20px] bg-white text-black text-center w-[20px] h-[20px] flex items-center justify-center">
            {products.length}
          </span>
        </li>

        <li>
          <button
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
          >
            <Moon size={24} />
          </button>
        </li>
      </ul>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center">
      <button
        onClick={handleMenuToggle}
        className="text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <ul className="md:hidden flex flex-col items-center space-y-5 mt-4">
      <li>
        <Link
          className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
          to={"/products"}
          onClick={handleMenuToggle}
        >
          Products
        </Link>
      </li>
      <li>
        <a
          className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
          href="#"
          onClick={handleMenuToggle}
        >
          About
        </a>
      </li>
      <li className="relative">
        <Link
          className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
          to={"/cart"}
          onClick={handleMenuToggle}
        >
          <ShoppingCart size={24} />
        </Link>
        <span className="rounded-full absolute top-[-10px] left-[20px] bg-white text-black text-center w-[20px] h-[20px] flex items-center justify-center">
          {products.length}
        </span>
      </li>
      <li>
        <button
          className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
        >
          <Moon size={24} />
        </button>
      </li>
    </ul>
  )}
</header>

  );
};

export default Header;
