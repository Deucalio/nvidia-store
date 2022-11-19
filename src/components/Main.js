import React, { useEffect, useState } from "react";

const CONTENT = [
  {
    imgURL:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_geforce_rtx_4080_product_photo_001_7_a4f5f5ba77.jpg",
    description: {
      para1: `"Spectacular eye-candy at sky-high frame rates"`,
      para2: "- OC3D",
      button: "Out Now",
    },
  },
  {
    imgURL: "https://i.imgur.com/7yxnKIp.png",
    description: {
      para1: "Unwrap an Upgrade",
      para2: "Play and create this holiday with GeForce and NVIDIA Studio",
      button: "Shop All",
    },
  },
  {
    imgURL: "https://i.imgur.com/GDdCkVj.png",
    description: {
      para1: "RTX. It's On",
      para2: "Ray tracing and NVIDIA DLSS 3 available now.",
      button: "Learn More",
    },
  },
  {
    imgURL: "https://i.imgur.com/gWb1XDC.png",
    description: {
      para1: "DLSS 3",
      para2: "10 games available now, more coming this month",
      button: "Learn More",
    },
  },
];

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacityExists, setOpacityExists] = useState(true);

  const handleOpacity = () => {
    setOpacityExists(false);
    setTimeout(() => {
      setOpacityExists(true);
    }, 1500);
  };

  // colors the selected dot green
  const handleClick = (dot) => {
    handleOpacity();
    setTimeout(() => {
      setCurrentIndex(Number(dot.id));
    }, 1000);
  };

  // changes content of page after 10 second
  useEffect(() => {
    const changeImg = () => {
      handleOpacity();
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % 4);
      }, 1000);
    };
    const timeOut = setTimeout(changeImg, 7000);

    return () => {
      clearInterval(timeOut);
    };
  }, [currentIndex]);

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${CONTENT[currentIndex].imgURL})`,
          opacity: `${opacityExists ? "1" : "0"}`,
        }}
        className={` transition-all duration-1000 
        } flex flex-col justify-center border-sky-400 bg-cover bg-center px-4 md:px-24 lg:bg-contain lg:bg-right-bottom lg:bg-no-repeat`}
      >
        <div className="flex flex-col gap-5 w-48 md:w-2/5 lg:w-1/3 text-3xl border-red-500 font-bold text-white sm:-translate-y-11  leading-tight">
          <p className=" lg:text-5xl">
            {CONTENT[currentIndex].description.para1}
          </p>
          <p className="">{CONTENT[currentIndex].description.para2}</p>
          <button className="w-fit rounded-sm bg-[#76b900] px-3 py-1 text-xl text-white transition-all hover:bg-[#84c01a]">
            {CONTENT[currentIndex].description.button}
          </button>
        </div>
      </main>
      <div className="mx-auto flex w-1/2 -translate-y-10 flex-wrap justify-center gap-2 border-amber-400 text-center text-6xl text-[#84c01a] xl:-translate-x-16">
        <div
          id="0"
          onClick={(e) => handleClick(e.target)}
          className={`${opacityExists ? "" : "pointer-events-none"} ${
            currentIndex === 0 ? "bg-[#84c01a]" : "bg-gray-400"
          } h-3 w-3 cursor-pointer rounded-full `}
        ></div>
        <div
          id="1"
          onClick={(e) => handleClick(e.target)}
          className={`${opacityExists ? "" : "pointer-events-none"} ${
            currentIndex === 1 ? "bg-[#84c01a]" : "bg-gray-400"
          } h-3 w-3 cursor-pointer rounded-full `}
        ></div>
        <div
          id="2"
          onClick={(e) => handleClick(e.target)}
          className={`${opacityExists ? "" : "pointer-events-none"} ${
            currentIndex === 2 ? "bg-[#84c01a]" : "bg-gray-400"
          } h-3 w-3 cursor-pointer rounded-full `}
        ></div>
        <div
          id="3"
          onClick={(e) => handleClick(e.target)}
          className={`${opacityExists ? "" : "pointer-events-none"} ${
            currentIndex === 3 ? "bg-[#84c01a]" : "bg-gray-400"
          } h-3 w-3 cursor-pointer rounded-full `}
        ></div>
      </div>
    </>
  );
};

export default Main;
