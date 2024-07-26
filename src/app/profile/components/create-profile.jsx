import React from "react";
import page_img from "/images/smiley-face.png";
import { PROFILE_STEPS } from "./steps.jsx";
import Accordion from "./accordion-component";

function CreateProfile() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-20">
      <div className="w-full grid grid-cols-7 gap-10 items-start">
        {/* left side */}
        <div className="col-span-7 md:col-span-2 bg-primary h-auto">
          <div className="relative w-full flex justify-start items-center text-white h-24">
            <img
              src={page_img}
              alt="img"
              className="z-[1] absolute h-full object-contain"
            />
            <div className="w-full absolute z-[2] flex justify-between items-center px-3">
              <h5>
                Profile <br /> Completion
              </h5>
              <div className="border-[5px] border-[#6CB69B] p-2 rounded-full w-12 h-12 flex justify-center items-center text-sm">
                0%
              </div>
            </div>
          </div>
          <div className="hidden md:block px-3 text-white py-2">
            {PROFILE_STEPS.map((step) => {
              return (
                <div
                  key={step.id}
                  className="flex justify-between items-center my-5"
                >
                  <h6>{step.title}</h6>
                  <div className="border-2 border-white p-2 rounded-full w-4 h-4 flex justify-center items-center text-sm"></div>
                </div>
              );
            })}
          </div>
        </div>
        {/* right side */}
        <div className="col-span-7 md:col-span-5">
          <div>
            <h5>Set up your profile.</h5>
          </div>
          <br />
          <div>
            {PROFILE_STEPS.map((step) => {
              return (
                <Accordion
                  key={step.id}
                  id={step.id}
                  img={step.img}
                  title={step.title}
                  description={step.description}
                  modal={step.modal}
                  modal_title={step.modal_title}
                />
              );
            })}
          </div>
          <br />
          <div className="flex gap-5">
            <button className="ease-duration-200 border disabled:bg-neutral-200 text-black disabled:text-gray-500 font-semibold w-full px-4 py-2 rounded flex justify-center items-center gap-2">
              <span>I'll do it later</span>
            </button>
            <button className="ease-duration-200 bg-neutral-200 text-gray-500 font-semibold w-full px-4 py-2 rounded flex justify-center items-center gap-2">
              <span>Done</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
