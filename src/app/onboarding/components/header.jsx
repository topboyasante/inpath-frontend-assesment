import React from "react";
import Logo from "../../../components/ui/logo";
import { Link } from "react-router-dom";

function OnboardingHeader() {
  return (
    <header className="flex justify-center items-center p-5 border-b h-14">
      <Link to={`/`}>
        <Logo />
      </Link>
    </header>
  );
}

export default OnboardingHeader;
