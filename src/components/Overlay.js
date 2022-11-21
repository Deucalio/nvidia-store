import React from "react";

const Overlay = ({ setOverlayActive, toggleOverlay }) => {
  const closeOverlay = setOverlayActive;
  return (
    //    overlay for cart
    <>
      <div className=" top-6 z-10 h-screen w-full overflow-y-auto md:overflow-visible   bg-gray-200 px-2 shadow-lg shadow-gray-900 md:absolute md:top-20 md:-m-8 md:h-fit md:w-[30rem] md:py-3 md:translate-x-20 md:translate-y-1 md:rounded-sm md:bg-gray-200 md:px-1   md:after:absolute md:after:left-1/2 md:after:-top-16 md:after:h-0 md:after:w-0 md:after:translate-x-7 md:after:translate-y-7 md:after:border-[25px] md:after:border-transparent md:after:border-b-gray-200 md:after:content-['']">
        <div className="flex flex-wrap justify-between px-8 py-4">
          <p className="text-3xl text-[#76b900]">Cart</p>
          <p
            onClick={closeOverlay}
            className="cursor-pointer -translate-y-1 text-5xl text-black/50"
          >
            &times;
          </p>
        </div>

        <div className="flex h-96 flex-col gap-5 border-amber-600 caret-slate-700 sm:overflow-y-auto">
          <div className="grid h-fit grid-cols-4 gap-y-6 border-b-2 border-[#666]/25 sm:px-6">
            <div className="mt-3 flex flex-wrap gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 -rotate-90 cursor-pointer opacity-75"
                viewBox="0 0 24 24"
              >
                <path d="M24 22h-24l12-20z" />
              </svg>
              <p className="-mt-1 text-xl">5</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 rotate-90 cursor-pointer opacity-75"
                viewBox="0 0 24 24"
              >
                <path d="M24 22h-24l12-20z" />
              </svg>
            </div>

            <div className="col-span-3">
              <p className="relative text-xl  tracking-tighter text-black opacity-90">
                NVIDIA GeForce RTX 3090 Ti
              </p>
              <p className="cursor-pointer text-lg text-[#76b900]">Remove</p>
            </div>

            <p className="col-start-4 -ml-8 text-2xl text-black">
              $5499.<sup>99</sup>
            </p>
          </div>
          <div className="py-6 pb-16  flex flex-col items-center ">
            <p className="text-right text-3xl self-end md:px-16 px-32">
              $11,999.<sup>99</sup>
            </p>
            <button className="rounded-sm bg-[#76b900] w-9/12 mt-2 mx-auto flex flex-wrap justify-center py-2 items-center gap-3">
              <svg
                xmlns="http//www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <p className="md:text-2xl text-xl text-white text-center font-bold mt-1">
                Checkout
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
