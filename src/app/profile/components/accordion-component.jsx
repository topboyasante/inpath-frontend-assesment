import React, { useState } from "react";
import { HiPlus, HiX } from "react-icons/hi";

function Accordion({ id, img, title, description, modal, modal_title }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div key={id} className="flex gap-3 items-start my-5 w-full">
      <img src={img} alt={title} className="w-6 h-6" />
      <div className="w-full border-b pb-3">
        <div className="flex justify-between items-center w-full">
          <h6>{title}</h6>
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiPlus />
          </button>
        </div>
        <p className="text-neutral-500">{description}</p>
        {isOpen && modal && (
          <div className="border my-5">
            <div className="p-5 flex justify-between items-center border-b">
              <p>{modal_title}</p>
              <button onClick={() => setIsOpen(!isOpen)}>
                <HiX />
              </button>
            </div>
            <div>{modal}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
