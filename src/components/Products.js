import React from "react";
import Nav from "./Nav";

const Products = () => {
  return (
    <>
      <Nav />
      <main class="grid h-fit grid-cols-4 gap-7  border-sky-400 p-2">
        <div class="col-span-4 flex h-fit flex-col gap-8 px-2">
          <p class="w-2/3 px-2 text-3xl leading-snug tracking-tighter text-slate-100">
            Shop GeForce Graphics Cards, Laptops, and Systems
          </p>
          <div class="flex flex-wrap items-center border-amber-300 px-2">
            <input
              maxlength="24"
              type="text"
              class="w-full bg-[#ccc] text-2xl text-[#666] placeholder:opacity-90 focus:bg-slate-100 focus:ring-0"
              placeholder="Example: GeForce RTX"
            />
            <svg
              class="ml-auto -mt-12 mr-2 h-6 w-8 cursor-pointer bg-[#ccc]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </div>
          <div class="flex w-full flex-wrap items-center gap-4 border-2 border-white border-opacity-40 p-4">
            <label
              class="col-span-1 text-3xl tracking-tighter text-gray-200"
              for="sort"
            >
              {" "}
              Sort by:{" "}
            </label>
            <select
              class="col-span-2 border-transparent bg-[#ccc] py-2 pl-3 text-left text-lg tracking-wide text-[#666] focus:border-transparent focus:bg-slate-200 focus:ring-0"
              id="sort"
            >
              <option value="featured-products" class="bg-slate-100">
                Featured Products
              </option>
              <option value="lowest-price" class="bg-slate-100">
                Lowest Price
              </option>
              <option value="highest-price" class="bg-slate-100">
                Highest Price
              </option>
            </select>
          </div>
        </div>

        <div class="col-span-4 mx-auto h-full max-w-5xl  border-rose-500 border-opacity-60 p-1">
          <p class="mb-6 -translate-y-4 -translate-x-3 text-2xl tracking-tighter text-white">
            X results found
          </p>
          <div class="featured flex h-fit flex-col border-2 border-[#666] bg-[#1a1a1a] p-2">
            <p class="ml-2 text-2xl tracking-tight text-white">Featured</p>
            <img
              class="bg-cover"
              src="https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3090-ti.png"
              alt=""
            />

            <div class="mx-auto flex flex-col w-11/12">
              <p class="text-lg text-white">NVIDIA GeForce RTX 3090 Ti</p>
              <p class="text-lg text-[#76b900]">
                Promotional Price, Limited time only
              </p>
              <div class="mt-4 flex flex-wrap ml-4  items-center gap-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-[#76b900]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <p class="text-md">Cooling System: Fan</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
