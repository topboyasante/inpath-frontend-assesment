import React, { useState } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatUnderlined,
} from "react-icons/md";
import { cn } from "../../../lib/utils";

function RTIcon({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={cn("p-2", { "bg-[#f5f5f5] rounded-md": isActive })}
      type="button"
    >
      {children}
    </button>
  );
}

function AddAccomplishments() {
  return (
    <div className="p-5">
      <form className="grid grid-cols-2 gap-5 p-5">
        <div className="col-span-2 flex flex-col">
          <div className="w-full border">
            <div className="border-b p-5">
              <div className="flex gap-5 items-center">
                <RTIcon>
                  <MdFormatBold size={20} />
                </RTIcon>
                <RTIcon>
                  <MdFormatUnderlined size={20} />
                </RTIcon>
                <RTIcon>
                  <MdFormatItalic size={20} />
                </RTIcon>
                <RTIcon>
                  <MdFormatListBulleted size={20} />
                </RTIcon>
              </div>
            </div>
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              className="resize-none w-full outline-none p-2"
              placeholder="Type something"
            ></textarea>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-end items-center">
            <button className="ease-duration-200 bg-black text-white font-semibold px-4 py-2 rounded flex justify-center items-center gap-2 text-nowrap">
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAccomplishments;
