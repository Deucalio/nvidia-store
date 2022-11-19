import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="h-14 bg-black px-7 py-2 md:px-24">
      <ul className="flex items-center gap-10">
        <NavLink to="/">
          <li>
            <p className="cursor-pointer text-2xl font-bold text-white">
              GeForce
            </p>
          </li>
        </NavLink>
        <NavLink to="/buy">
          <li>
            <p className="mt-1 cursor-pointer text-xl text-gray-300 hover:text-gray-100">
              Products
            </p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
