import React from "react";
import OnboardingHeader from "../onboarding/components/header";
import CreateProfile from "./components/create-profile";

function ProfilePage() {
  return (
    <section>
      <OnboardingHeader />
      <CreateProfile />
    </section>
  );
}

export default ProfilePage;
