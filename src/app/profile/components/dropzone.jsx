import React from "react";
import Dropzone from "react-dropzone";
import icon from "/images/arrow-down-circle-line.png";

function DropzoneInput() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section className="border border-dashed h-auto p-2 rounded outline-none">
          <div
            className="flex justify-between items-center"
            {...getRootProps()}
          >
            <div className="flex items-center gap-2">
              <img src={icon} alt="upload_icon" className="w-6 h-6" />
              <p className="text-[#737377]">Drop file here</p>
            </div>
            <button
              type="button"
              className="ease-duration-200 bg-[#e8e8e8] text-[#818181] font-semibold px-4 py-2 rounded flex justify-center items-center gap-2 text-nowrap text-sm"
            >
              <input {...getInputProps()} />
              Browse
            </button>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default DropzoneInput;
