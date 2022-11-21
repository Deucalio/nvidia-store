import React from "react";
import Nav from "./Nav";

const Products = () => {
  return (
    <>
      <Nav />
      <main className="grid h-fit grid-cols-4 gap-7 border-sky-400 p-2 md:mx-auto md:w-10/12 lg:w-8/12 xl:w-11/12 xl:grid-cols-8">
        <aside className="col-span-2 row-span-3 mt-28 hidden border-r-[1px] border-r-[#666] xl:block">
          <p className="w-56 -translate-x-3 border-b-2 border-[#666] xl:text-xl 2xl:text-2xl text-slate-100">
            Product Category
          </p>
          <ul className="mt-5 flex -translate-x-3 flex-col gap-4 xl:text-lg 2xl:text-xl tracking-normal text-slate-200 text-opacity-90">
            <li className="w-fit flex flex-wrap hover:text-slate-100  cursor-pointer">
              <input
                className="cursor-pointer w-6 h-6 border-2  border-[#666] rounded-sm bg-black  accent-[#76b900]"
                type="checkbox"
                id="filter_category_1"
                name="filter1"
                value="GraphicsCards"
              />
              <label className=" cursor-pointer ml-2" for="filter_category_1">
                {" "}
                Graphics Cards
              </label>
            </li>
            <li className="w-fit flex flex-wrap hover:text-slate-100 cursor-pointer">
              <input
                className=" cursor-pointer w-6 h-6 border-2 border-[#666] rounded-sm bg-black active:bg-[#76b900] accent-[#76b900]"
                type="checkbox"
                id="filter_category_2"
                name="filter2"
                value="GamingLaptops"
              />
              <label className=" cursor-pointer ml-2" for="filter_category_2">
                {" "}
                Gaming Laptops
              </label>
            </li>
            <li className="w-fit flex flex-wrap hover:text-slate-100 cursor-pointer">
              <input
                className=" cursor-pointer w-6 h-6 border-2 border-[#666] rounded-sm bg-black active:bg-[#76b900] accent-[#76b900]"
                type="checkbox"
                id="filter_category_3"
                name="filter3"
                value="GamingMice"
              />
              <label className=" cursor-pointer ml-2" for="filter_category_3">
                {" "}
                Gaming Mice
              </label>
            </li>
          </ul>
        </aside>

        <div className="col-span-4 flex h-fit flex-col gap-8  border-amber-500 px-2 xl:col-span-6">
          <p className="w-2/3 px-2 text-3xl leading-snug tracking-tighter text-slate-100">
            Shop GeForce Graphics Cards, Laptops, and Systems
          </p>
          <div className="flex flex-wrap items-center border-amber-300 px-2">
            <input
              maxlength="24"
              type="text"
              className="w-full bg-[#ccc] text-2xl text-[#666] placeholder:opacity-90 focus:bg-slate-100 focus:ring-0  py-3 px-4 appearance-none placeholder:text-gray-600 placeholder:text-xl focus:outline-none focus:outline-1 focus:outline-blue-600"
              placeholder="Example: GeForce RTX"
            />
            <button className="-mt-14 mr-2 ml-auto" type="submit">
              {" "}
              <svg
                className="ml-auto h-7 w-8 cursor-pointer bg-transparent"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex w-full flex-wrap items-center gap-4 border-2 border-white border-opacity-40 p-4">
            <label
              className="col-span-1 text-xl 2xl:text-3xl tracking-tighter text-gray-200"
              for="sort"
            >
              {" "}
              Sort by:{" "}
            </label>
            <select
              className="col-span-2 w-48 border-transparent bg-[#ccc] p-2 text-left text-lg tracking-wide text-[#666] focus:border-transparent focus:bg-slate-200 focus:ring-0"
              id="sort"
            >
              <option value="featured-products" className="bg-slate-100">
                Featured Products
              </option>
              <option value="lowest-price" className="bg-slate-100">
                Lowest Price
              </option>
              <option value="highest-price" className="bg-slate-100">
                Highest Price
              </option>
            </select>
          </div>
        </div>

        <div className="col-span-4 mx-auto flex h-full max-w-5xl flex-col gap-8  border-rose-500 border-opacity-60 p-1 md:w-full xl:col-span-6 xl:h-[27rem] xl:px-2">
          <p className="mb-6 -translate-x-3 text-2xl tracking-tighter text-white">
            X results found
          </p>
          <div className="featured flex h-fit flex-col border-2 border-[#666] bg-[#1a1a1a] p-2 md:items-center xl:h-96 xl:items-start">
            <p className="ml-2 text-xl tracking-tight text-white">Featured</p>
            <img
              className="w-80 bg-cover md:h-52"
              src="https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3090-ti.png"
              alt=""
            />

            <div className="mx-auto flex w-11/12 flex-col md:items-center xl:-mt-48 xl:ml-28 xl:flex-wrap xl:py-2">
              <p className="text-lg text-white lg:text-xl xl:-ml-8">
                NVIDIA GeForce RTX 3090 Ti
              </p>
              <p className="text-lg text-[#76b900] lg:text-lg">
                Promotional Price, Limited time only
              </p>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white md:ml-20 md:w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-[#76b900]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <p>Cooling System: Fan</p>
              </div>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white md:ml-20 md:w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-[#76b900]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <p>Boost Clock Speed: 1.86 GHz</p>
              </div>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white md:ml-20 md:w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-[#76b900]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <p>GPU Memory Size: 24 GB</p>
              </div>
              <p className="mt-4 text-lg font-bold text-white xl:ml-auto xl:mr-16 xl:-mt-48">
                $1,099.<sup>99</sup>
              </p>
              <button className="my-4 w-fit rounded-sm bg-[#76b900] p-3 text-xl text-white transition-all hover:bg-[#84c01a] xl:ml-auto xl:mr-16 xl:translate-y-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-4 flex h-fit flex-col p-2 transition-all duration-1000 sm:items-center md:col-span-2 xl:hover:ring-1 xl:hover:ring-[#666]">
          <p className="ml-2 text-xl tracking-tight text-white">Featured</p>
          <img
            className="w-80 bg-cover md:h-52"
            src="https://assets.nvidia.partners/images/png/GeForce-RTX4080-Back.png"
            alt=""
          />

          <div className="mx-auto flex w-11/12 flex-col sm:w-2/3 sm:items-center">
            <p className="text-lg text-white lg:text-xl xl:ml-8 xl:w-52">
              NVIDIA GeForce RTX 4080
            </p>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="text-md">Cooling System: Fan</p>
            </div>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>Boost Clock Speed: 2.51 GHz</p>
            </div>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>GPU Memory Size: 16 GB</p>
            </div>
            <p className="mt-4 text-lg font-bold text-white">
              $1,199.<sup>99</sup>
            </p>
            <button className="my-4 w-fit rounded-sm bg-[#76b900] p-3 text-xl text-white transition-all duration-700 hover:bg-[#84c01a]">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="col-span-4 flex h-fit flex-col p-2 transition-all duration-1000 sm:items-center md:col-span-2 xl:hover:ring-1 xl:hover:ring-[#666]">
          <p className="ml-2 text-xl tracking-tight text-white">Featured</p>
          <img
            className="w-80 bg-cover md:h-52"
            src="https://assets.nvidia.partners/images/png/GeForce-RTX4090-Back.png"
            alt=""
          />

          <div className="mx-auto flex w-11/12 flex-col sm:w-2/3 sm:items-center">
            <p className="text-lg text-white lg:text-xl xl:ml-8 xl:w-52">
              NVIDIA GeForce RTX 4090
            </p>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="text-md">Cooling System: Fan</p>
            </div>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>Boost Clock Speed: 2.52 GHz</p>
            </div>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>GPU Memory Size: 24 GB</p>
            </div>
            <p className="mt-4 text-lg font-bold text-white">
              $1,599.<sup>99</sup>
            </p>
            <button className="pointer-events-none my-4 w-fit rounded-sm bg-[#1a1a1a] p-3 text-xl text-white transition-all hover:bg-[#84c01a]">
              Out of Stock
            </button>
          </div>
        </div>

        <div className="col-span-4 flex h-fit flex-col p-2 transition-all duration-1000 sm:items-center md:col-span-2 xl:hover:ring-1 xl:hover:ring-[#666]">
          <p className="ml-2 text-xl tracking-tight text-white">Featured</p>
          <img
            className="w-80 bg-cover md:h-52"
            src="https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png"
            alt=""
          />

          <div className="mx-auto flex w-11/12 flex-col sm:w-2/3 sm:items-center">
            <p className="text-lg text-white lg:text-xl xl:ml-8 xl:w-52">
              NVIDIA GeForce RTX 3080
            </p>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="text-md">Cooling System: Fan</p>
            </div>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>Boost Clock Speed: 1.71 GHz</p>
            </div>
            <div className="mt-4 ml-4 flex flex-wrap items-center gap-2 text-white sm:ml-20 sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#76b900]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>GPU Memory Size: 10 GB</p>
            </div>
            <p className="mt-4 text-lg font-bold text-white">
              $699.<sup>99</sup>
            </p>
            <button className="pointer-events-none my-4 w-fit rounded-sm bg-[#1a1a1a] p-3 text-xl text-white transition-all hover:bg-[#84c01a]">
              Out of Stock
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
