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
        <li class="mt-2 flex flex-wrap relative">
          <button class="h-w-7 w-7 bg-transparent text-slate-200 before:content-[''] before:-ml-1 before:text-gray-50 before:absolute before:-top-4 before:text-lg  after:content-['box'] after:w-6 after:h-5 after:rounded-full after:absolute after:-top-3 after:left-2 before:z-10  after:bg-[#76b900] after:text-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
