import React, { useState } from "react";
import Logo from "../../../components/ui/logo";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { NAV_LINKS, TAB_LINKS } from "./nav-links.jsx";
import { cn } from "../../../lib/utils";

function Navbar() {
  const [index, setIndex] = useState(0);

  return (
    <div className="sticky top-0 z-[20] bg-white">
      <div className="border p-5 flex justify-center items-center">
        <div className="bg-[#f5f5f5] p-2 rounded w-auto flex items-center gap-5">
          {TAB_LINKS.map((link) => {
            return (
              <button
                type="button"
                onClick={() => setIndex(link.id)}
                className={cn("p-2 text-sm font-semibold", {
                  "bg-white shadow rounded": index === link.id,
                })}
              >
                {link.title}
              </button>
            );
          })}
        </div>
      </div>
      <nav className=" max-w-screen-xl mx-auto flex justify-between lg:justify-around items-center p-5 h-14">
        <Logo />
        <div className="hidden lg:flex gap-5">
          {NAV_LINKS.map((link) => {
            return (
              <div className="flex gap-2 items-center">
                <img src={link.img} alt={link.title} className="w-4 h-4" />
                <p>{link.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <Link to={`/login`}>Log In</Link>
          <Link to={`/onboarding`}>
            <button className="ease-duration-200 bg-black text-white font-semibold px-4 py-2 rounded flex justify-center items-center gap-2 text-nowrap">
              <span>Sign Up</span>
            </button>
          </Link>
          <button className="lg:hidden">
            <MdMenu size={30} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
