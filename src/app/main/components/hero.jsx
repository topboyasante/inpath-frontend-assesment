import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import circular_lines from "../../../assets/images/Frame.png";
import yellow from "../../../assets/images/yellow.png";

function Hero() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen relative">
      <div className="absolute z-[1] right-0 bottom-0">
        <img src={circular_lines} alt="lines" className="w-72 h-72" />
      </div>
      <div className="absolute z-[1] left-[20%] top-1/2">
        <img src={yellow} alt="lines" className="w-16 h-16" />
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
