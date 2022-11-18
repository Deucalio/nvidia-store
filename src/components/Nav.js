import React from "react";

const Nav = () => {
  return (
    <nav class="h-14 bg-black px-7 py-2 md:px-24">
      <ul class="flex items-center gap-10">
        <li>
          <p class="cursor-pointer text-2xl font-bold text-white">GeForce</p>
        </li>
        <li>
          <p class="mt-1 cursor-pointer text-xl text-gray-300 hover:text-gray-100">
            Products
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
