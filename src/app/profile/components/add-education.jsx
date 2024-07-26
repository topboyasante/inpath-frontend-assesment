import React from "react";

function AddEducationModal() {
  return (
    <div className="p-5">
      <form className="grid grid-cols-2 gap-5">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="institution" className="text-neutral-500">
            Institution
          </label>
          <select className="border h-12 p-2 rounded">
            <option value="male">KNUST</option>
            <option value="female">UG, Legon</option>
          </select>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <label htmlFor="qualification" className="text-neutral-500">
            Qualification
          </label>
          <select className="border h-12 p-2 rounded">
            <option value="male">Tetriary Education</option>
          </select>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <label htmlFor="course_category" className="text-neutral-500">
            Course Category
          </label>
          <select className="border h-12 p-2 rounded">
            <option value="male">Engineering</option>
          </select>
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="course_of_study" className="text-neutral-500">
            Course of Study
          </label>
          <input type="text" className="border h-12 p-2 rounded outline-none" />
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

export default AddEducationModal;
