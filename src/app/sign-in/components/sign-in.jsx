import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div>
        <h3>Welcome.</h3>
      </div>
      <br />
      <div>
        <form className="grid grid-cols-2 gap-5">
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
            <Link to={`/onboarding`}>
              <button className="ease-duration-200 bg-black disabled:bg-neutral-200 text-white disabled:text-gray-500 font-semibold w-full px-4 py-2 rounded flex justify-center items-center gap-2">
                <span>Sign In</span>
              </button>
            </Link>
          </div>
        </form>
        <div className="my-5">
          <p>
            Don&apos;t have an account? {" "}
            <span>
              <Link
                to={"/onboarding"}
                className="text-primary font-semibold hover:underline"
              >
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
