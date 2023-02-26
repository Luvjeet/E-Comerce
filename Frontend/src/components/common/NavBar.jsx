import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-[#121212] h-12 w-full flex absolute">
      <ul className="flex justify-center gap-10 text-white text-xl flex-[0.6]">
        <li className="p-2">
          <a href="/">Home</a>
        </li>
        <li className="p-2">
          <a href="/login">Login</a>
        </li>
        <li className="p-2">
          <a href="/signup">SignUp</a>
        </li>
      </ul>
      <div className="flex items-center justify-center p-2 flex-[0.4]">
        <FaShoppingCart className="text-white text-xl" />
      </div>
    </nav>
  );
};

export default NavBar;
