import React from "react";

const IMAGES = [
  "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_geforce_rtx_4080_product_photo_001_7_a4f5f5ba77.jpg",
  "https://i.imgur.com/7yxnKIp.png",
  "https://i.imgur.com/GDdCkVj.png",
  "https://i.imgur.com/gWb1XDC.png",
];

const Main = () => {
  return (
    <>
      <main class="flex flex-col justify-center border-sky-400 bg-cover bg-center px-4 md:px-24 lg:bg-contain lg:bg-right-bottom lg:bg-no-repeat">
        <div class="flex flex-col gap-5 w-48 md:w-2/5 lg:w-1/3 text-3xl border-red-500 font-bold text-white sm:-translate-y-11  leading-tight">
          <p class=" lg:text-5xl">
            "Spectacular eye-candy at sky-high frame rates"
          </p>
          <p class="">- OC3D</p>
          <button class="w-fit rounded-sm bg-[#76b900] px-3 py-1 text-xl text-white transition-all hover:bg-[#84c01a]">
            Out Now
          </button>
        </div>
      </main>
      <div class="mx-auto flex w-1/2 -translate-y-10 flex-wrap justify-center gap-2 border-amber-400 text-center text-6xl text-[#84c01a] xl:-translate-x-16">
        <div class="h-3 w-3 cursor-pointer rounded-full bg-[#84c01a]"></div>
        <div class="h-3 w-3 cursor-pointer rounded-full bg-gray-400"></div>
        <div class="h-3 w-3 cursor-pointer rounded-full bg-gray-400"></div>
        <div class="h-3 w-3 cursor-pointer rounded-full bg-gray-400"></div>
      </div>
    </>
  );
};

export default Main;