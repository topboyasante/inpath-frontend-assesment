import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { COUNTRIES } from "../../../constants/country-codes";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div>
        <h3>Get Started.</h3>
      </div>
      <br />
      <div>
        <form className="grid grid-cols-2 gap-5">
          <div className="col-span-2 flex flex-col">
            <label htmlFor="name" className="text-neutral-500">
              Full Name
            </label>
            <input
              type="text"
              className="border h-12 p-2 rounded outline-none"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <label htmlFor="dob" className="text-neutral-500">
              Date of Birth
            </label>
            <input
              type="date"
              className="border h-12 p-2 rounded outline-none"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <label htmlFor="gender" className="text-neutral-500">
              Gender
            </label>
            <select className="border h-12 p-2 rounded">
              <option disabled>Select one</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="email" className="text-neutral-500">
              Email Address
            </label>
            <input
              type="email"
              className="border h-12 p-2 rounded outline-none"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="phone_number" className="text-neutral-500">
              Phone Number
            </label>
            <div className="relative flex items-center border h-12 rounded w-full outline-none red-500">
              <select className="w-[20%] md:w-[10%] border-y h-12 p-2 rounded outline-none">
                {COUNTRIES.map((country) => {
                  return (
                    <option value={country.value} key={country.value}>
                      {country.emoji}
                    </option>
                  );
                })}
              </select>
              <input
                type="tel"
                className="w-[80%] md:w-[90%] border-y h-12 p-2 rounded outline-none"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="password" className="text-neutral-500">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                disabled={isSubmittingForm}
                className="border h-12 p-2 rounded pr-10 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm"
                disabled={isSubmittingForm}
              >
                {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <Link to={`/verify-account`}>
              <button className="ease-duration-200 bg-black disabled:bg-neutral-200 text-white disabled:text-gray-500 font-semibold w-full px-4 py-2 rounded flex justify-center items-center gap-2">
                <span>Create Account</span>
              </button>
            </Link>
          </div>
        </form>
        <div className="my-5">
          <p>
            Already signed up?
            <span>
              <Link
                to={"/login"}
                className="text-primary font-semibold hover:underline"
              >
                Log in
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
