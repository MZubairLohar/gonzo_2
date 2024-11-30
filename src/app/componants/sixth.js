import React from "react";

export default function roadmap() {
  return (
    <div id="roadmap" className="grid bg-[#6c83d6] place-items-center font-custom tracking-widest px-6 py-10 sm:px-8 lg:px-20">
      <div className="mt-10 lg:text-4xl sm:text-base lg:text-7xl text-white">ROADMAP</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-center">
        {/* Creat wallet */}
        <div className="m-4 p-6 sm:p-10 lg:p-20 bg-white rounded-xl shadow-md overflow-hidden max-w-xl mx-auto">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48  w-full object-cover md:h-full md:w-48 "
                src="/dota.png"
                alt="left-Images"
              />
            </div>
          </div>
        </div>
        {/* Get Some USDT */}
        <div className="m-4 p-20 mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-5xl">
          <div className="md:flex">
            <div className="p-8">
              <p className="mt-2 font-sans tracking-wider text-center text-black font-semibold ">
                Phase 1: Meme
              </p>
              <p className="mt-2 font-sans tracking-wider text-center text-black font-semibold">
                Phase 2: Vibe and HODL
              </p>
              <p className="mt-2 font-sans tracking-wider text-center text-black font-semibold">
                Phase 3: Meme Takeover
              </p>
            </div>
          </div>
        </div>
        {/* Go To Buy Page */}
        <div className="m-4 p-20  mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-5xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/dota.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

