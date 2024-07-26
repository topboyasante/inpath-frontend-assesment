import React from "react";
import info_icon from "../../../assets/images/information-fill.png";

function AddWorkExperienceModal() {
  return (
    <div>
      <div className="bg-[#319CFF]/10 p-5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img src={info_icon} alt="info_icon" className="w-8 h-8" />
          <p>
            Link your NSS details to Flair to make you more credible to
            employers.
          </p>
          <button className="ease-duration-200 bg-black text-white font-semibold px-4 py-2 rounded flex justify-center items-center gap-2 text-nowrap">
            <span>Link NSS</span>
          </button>
        </div>
      </div>
      <form className="grid grid-cols-2 gap-5 p-5">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="job_title" className="text-neutral-500">
            Job Title
          </label>
          <input type="text" className="border h-12 p-2 rounded outline-none" />
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="company" className="text-neutral-500">
            Company
          </label>
          <select className="border h-12 p-2 rounded">
            <option>Search company</option>
          </select>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <label htmlFor="start_Date" className="text-neutral-500">
            Start Date
          </label>
          <input type="date" className="border h-12 p-2 rounded outline-none" />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <label htmlFor="end_date" className="text-neutral-500">
            End Date
          </label>
          <input type="date" className="border h-12 p-2 rounded outline-none" />
        </div>
        <div className="col-span-2">
          <div className="flex justify-start items-center">
            <input type="checkbox" className="mr-2" />
            <p>I currently work here</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-end items-center">
            <button className="ease-duration-200 bg-neutral-200 text-gray-500 font-semibold px-4 py-2 rounded flex justify-center items-center gap-2">
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddWorkExperienceModal;
