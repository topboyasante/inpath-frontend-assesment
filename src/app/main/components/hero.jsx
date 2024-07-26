import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import circular_lines from "/images/Frame.png";
import yellow from "/images/yellow.png";
import red from "/images/red.png";
import woman from "/images/woman.png";
import Ellipse77 from "/images/Ellipse 77.png";
import Ellipse73 from "/images/Ellipse 73.png";
import Ellipse74 from "/images/Ellipse 74.png";
import Ellipse80 from "/images/Ellipse 80.png";
import Ellipse81 from "/images/Ellipse 81.png";

function Hero() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen relative">
      <div className="absolute z-[1] right-0 bottom-0">
        <img src={circular_lines} alt="lines" className="w-72 h-72" />
      </div>
      <div className="absolute z-[1] left-[5%] lg:left-[20%] top-1/2">
        <img src={yellow} alt="lines" className="w-16 h-16 object-contain" />
      </div>
      <div className="absolute z-[1] right-[20%] lg:right-[10%] top-20">
        <img src={red} alt="lines" className="w-16 h-16 object-contain" />
      </div>
      <div className="absolute z-[1] left-[23%] bottom-0">
        <img src={woman} alt="lines" className="w-16 h-16 object-contain" />
      </div>
      <div className="absolute z-[1] left-[50%] bottom-0">
        <img src={Ellipse77} alt="lines" className="object-contain" />
      </div>
      <div className="absolute z-[1] left-[40%] bottom-5">
        <img src={Ellipse73} alt="lines" className="object-contain" />
      </div>
      <div className="absolute z-[1] left-10 bottom-[20%]">
        <img src={Ellipse80} alt="lines" className="object-contain" />
      </div>
      <div className="absolute z-[1] right-10 top-[30%]">
        <img src={Ellipse81} alt="lines" className="object-contain" />
      </div>
      <div className="absolute z-[1] right-[18%] bottom-24">
        <img src={Ellipse74} alt="lines" className="object-contain" />
      </div>
      <div className="absolute z-[2] flex w-full min-h-screen justify-center items-center">
        <div>
          <div className="text-center">
            <h1>Discover a greater you.</h1>
            <h3 className="mt-3">
              We help you{" "}
              <span className="text-primary">find the better job.</span>
            </h3>
          </div>
          <br />
          <div>
            <div className="bg-white px-4 py-2 rounded-full flex items-center gap-3">
              <div className="relative w-[80%]">
                <input
                  type={"search"}
                  className="outline-none h-12 p-2 pl-12 w-full border-r"
                  placeholder="Try “Civil Engineer”"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 px-3 py-2 text-sm"
                >
                  <CiSearch size={25} />
                </button>
              </div>
              <select className="outline-none h-12 p-2 rounded">
                <option>Jobs</option>
              </select>
              <button className="bg-primary text-white p-2 rounded-full flex justify-center items-center gap-2 text-nowrap">
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
