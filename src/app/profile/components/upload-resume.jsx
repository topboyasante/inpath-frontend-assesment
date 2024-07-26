import React from "react";

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
          <div className="border border-dashed h-12 p-2 rounded outline-none">
            <input type="file" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="job_title" className="text-black font-semibold">
            Other files eg. portfolio
          </label>
          <p className="text-neutral-500">
            Format should be either .pdf, .docx, .doc
          </p>
          <div className="border border-dashed h-12 p-2 rounded outline-none">
            <input type="file" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-end items-center">
            <button className="ease-duration-200 bg-black text-white font-semibold px-4 py-2 rounded flex justify-center items-center gap-2 text-nowrap">
              <span>Link NSS</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadResumeModal;
