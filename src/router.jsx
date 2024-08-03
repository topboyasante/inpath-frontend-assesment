import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./app/sign-up/page";
import CompleteOnboardingPage from "./app/onboarding/page";
import VerifyPage from "./app/verify-account/page";
import ProfessionalCareerPage from "./app/professional-career/page";
import ProfilePage from "./app/profile/page";
import HomePage from "./app/main/page";
import SignInPage from "./app/sign-in/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/onboarding",
    element: <CompleteOnboardingPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/verify-account",
    element: <VerifyPage />,
  },
  {
    path: "/professional-career",
    element: <ProfessionalCareerPage />,
  },
  {
    path: "/create-profile",
    element: <ProfilePage />,
  },
]);

export default router;
