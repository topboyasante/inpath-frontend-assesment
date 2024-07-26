import React from "react";
import SingleImageDropzone from "./dropzone";

function UploadResumeModal() {
  return (
    <div className="p-5">
      <form className="grid grid-cols-2 gap-5 p-5">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="job_title" className="text-black font-semibold">
            Resume/CV
          </label>
          <p className="text-neutral-500">
            Format should be either .pdf, .docx, .doc
          </p>
          <SingleImageDropzone />
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="job_title" className="text-black font-semibold">
            Other files eg. portfolio
          </label>
          <p className="text-neutral-500">
            Format should be either .pdf, .docx, .doc
          </p>
          <SingleImageDropzone />
        </div>
        <div className="col-span-2">
          <div className="flex justify-end items-center">
            <button className="ease-duration-200 bg-[#e8e8e8] text-[#818181] font-semibold px-4 py-2 rounded flex justify-center items-center gap-2 text-nowrap">
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadResumeModal;
