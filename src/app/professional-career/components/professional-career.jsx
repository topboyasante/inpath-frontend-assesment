import React, { useState } from "react";
import { CAREER_OPTIONS } from "./career";
import { cn } from "../../../lib/utils";

function ProfessionalCareer() {
  const [index, setIndex] = useState(null);

  return (
    <div className="max-w-lg mx-auto px-6 py-20">
      <div>
        <h3>Where are you currently in your professional career?</h3>
      </div>
      <div className="grid grid-cols-1 gap-5 my-8">
        {CAREER_OPTIONS.map((option) => {
          return (
            <button
              key={option.id}
              className={cn(
                "border text-center px-4 py-2 rounded-full ease duration-200",
                {
                  "border-black": index === option.id,
                }
              )}
              onClick={() => setIndex(option.id)}
            >
              <h5>{option.title}</h5>
            </button>
          );
        })}
      </div>
      <div>
        <button
          disabled={index === null}
          className="ease-duration-200 bg-black disabled:bg-neutral-200 text-white disabled:text-gray-500 font-semibold w-full px-4 py-2 rounded flex justify-center items-center gap-2"
        >
          <span>Continue</span>
        </button>
      </div>
    </div>
  );
}

export default ProfessionalCareer;
