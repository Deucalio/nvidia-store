const App = () => {
  return (
    <>
       <nav class="h-14 bg-black px-7 py-2 md:px-24">
        <ul class="flex gap-10 items-center">
          <li>
            <p class="text-2xl text-white font-bold cursor-pointer">GeForce</p>
          </li>
          <li>
            <p class="text-xl text-gray-300 mt-1 cursor-pointer hover:text-gray-100">Products</p>
          </li>
        </ul>
      </nav>
      <main class="flex flex-col   justify-center px-2  md:px-24 border-sky-400 bg-cover bg-center lg:bg-contain lg:bg-right-bottom lg:bg-no-repeat">
        <div
          class="w-2/3  lg:text-5xl  border-red-500
        lg:leading-snug  text-3xl text-white font-bold sm:-translate-y-11"
        >
          <p>"Spectacular </p>
          <p>eye-candy</p>
          <p>at sky-high frame rates"</p>
          <p class="text-3xl">- OC3D</p>
          <button class="bg-[#76b900] hover:bg-[#84c01a] transition-all rounded-sm px-3 py-1 text-xl text-white">
            Out Now
          </button>
        </div>
     
      </main>
         <div class=" border-amber-400 text-6xl text-[#84c01a] w-1/2 mx-auto text-center flex flex-wrap gap-2 justify-center -translate-y-10 xl:-translate-x-16">
          <div class="h-3 w-3 rounded-full bg-[#84c01a] cursor-pointer"></div>
          <div class="h-3 w-3 rounded-full bg-gray-400 cursor-pointer"></div>
          <div class="h-3 w-3 rounded-full bg-gray-400 cursor-pointer"></div>
          <div class="h-3 w-3 rounded-full bg-gray-400 cursor-pointer"></div>
        </div>
    </>
  );
};

export default App;
