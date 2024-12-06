"use client";
import React from "react";

export default function Fifth() {
  return (
    <div className=" bg-[#6c83d6] place-items-center font-custom tracking-widest pb-8 text-center ">
      <div className=" mt-20 lg:text-7xl sm:text-base text-white ">Bonuses & Referrals</div>
        <p className="text-white" >Ready for Whales and influencers!</p>
      <div className="m-4 lg:p-20 sm:p-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-5xl  lg:max-w-lg ">
          <div className="md:flex">
            <div className="p-8 place-items-center text-center">
              <div className="uppercase tracking-wider text-2xl text-center text-black font-semibold font-custom2">
                    Referral - Bonus 
                    <div className="text-center text-3xl tracking-wider">
                        Gonzo
                    </div>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                    Purchase via Referral 
                <p className="text-center font-normal">
                    $0~$5000 3% Gonzo
                </p>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                  Purchase via Referral $5000 & More 
                <p className="text-center font-normal">
                    5% Gonzo
                </p>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}