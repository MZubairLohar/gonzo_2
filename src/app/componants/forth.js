"use client";
import React from "react";

function Forth() {
  return (
    <div id="Tokenomics" className="grid mt-6 bg-[#6c83d6] text-center place-items-center font-custom tracking-widest">
      <div className="  lg:text-7xl tracking-wide text-white sm:text-base">TOKENOMICS</div>
      <div className=" grid grid-rows-1 area place-content-center my-10 items-center">
        {/* Creat wallet */}
        <div className="m-4  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div className="md:flex">
            <div className="p-8 md:flex-1">
              <p className="uppercase tracking-wider text-center text-4xl text-black font-semibold font-custom2">
                Token Supply
              </p>
              <p className="block mt-5 text-xl leading-tight text-center font-bold text-[#919ac9] ">
                2,000,000,000
              </p>
              <p className="mt-10 p-4 text-center font-sans border-4 text bg-[#6c83d6] text-white rounded-tr-[40px] rounded-bl-[40px] text-black">
                No Taxes 
              </p>
            </div>
            <div className="md:flex-1 md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-full"
                src="/money.jpg"
              />
            </div>
          </div>
        </div>

        {/* Get Some USDT */}
      </div>
    </div>
  );
}

export default Forth;
