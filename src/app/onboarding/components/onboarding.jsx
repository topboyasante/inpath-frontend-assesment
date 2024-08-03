import React, { useState } from "react";
import { ONBOARDING_OPTIONS } from "./onboarding-options";
import { GoArrowRight } from "react-icons/go";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";

function Onboarding() {
  const [account, setAccount] = useState(null);

  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div>
        <h3>What type of account are you setting up?</h3>
      </div>
      <div className="grid auto-rows-fr grid-cols-2 gap-5 mt-8 mb-5">
        {ONBOARDING_OPTIONS.map((option) => {
          return (
            <button
              className="col-span-2 md:col-span-1"
              onClick={() => setAccount(option.id)}
            >
              <div
                className={cn(
                  "border rounded-md p-5 relative flex flex-col items-start md:justify-center md:items-start h-full ease duration-200",
                  {
                    "border-black": account === option.id,
                  }
                )}
              >
                {!option.isLive && (
                  <div className="absolute top-0 right-0 bg-[#FCF4E6] text-[#D98F00] rounded-tr-md p-2 text-xs font-bold">
                    Coming Soon
                  </div>
                )}
                <img src={option.img} alt={option.title} className="w-12" />
                <div className="pt-2 text-left">
                  <h5 className="mb-2">{option.title}</h5>
                  <p className="text-neutral-500">{option.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <button
        disabled={account == null}
        className="ease-duration-200 bg-black disabled:bg-neutral-200 text-white disabled:text-gray-500 font-semibold w-full px-4 py-2 rounded"
      >
        <Link to={`/professional-career`} className=" flex justify-center items-center gap-2">
          <span>Next</span>
          <GoArrowRight />
        </Link>
      </button>
    </div>
  );
}

export default Onboarding;
