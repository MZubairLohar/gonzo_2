"use client";
import Navbar from "./componants/navbar";
import First from "./componants/first";
import Second from "./componants/second";
import Third from "./componants/third";
import Forth from "./componants/forth";
import Fifth from "./componants/fifth";
import Sixth from "./componants/sixth"
import Seventh from "./componants/seventh"



export default function Home() {
  return (
    <div className="md:-mx-20 px-0 md:item-center sm:md:item-center -px-16 ">
      <Navbar />
      <First />
      <div className="w-full h-2 z-0 bg-white rounded-lg ">
      </div>
      <Second />
      <div className="h-2 z-0 bg-white rounded-lg">
      </div>
      <Third />
      <div className="h-2 z-0 bg-white rounded-lg">
      </div>
      <Forth />
      <div className="h-2 z-0 bg-white rounded-lg">
      </div>
      <Fifth/>
      <div className="h-2 z-0 bg-white rounded-lg">
      </div>
      <Sixth/>
      <Seventh />
    </div>
  );
}
