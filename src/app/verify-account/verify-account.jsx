import React from "react";
import page_img from "/images/account-verification.png";

function VerifyAccount() {
  return (
    <div className="max-w-md mx-auto min-h-[calc(100vh-56px)] flex flex-col justify-center items-center px-6 py-3">
      <img
        src={page_img}
        alt="verify-account"
        className="h-32 w-32 object-contain"
      />
      <div className="mt-5 text-center">
        <h3>Verify your account</h3>
        <p className="text-neutral-500">
          A verification email will be sent to your email address provided.
          Click on the link in the mail to verify your account.
        </p>
      </div>
      <br />
      <div className="bg-[#f5f5f5] w-auto border border-[#e8e8e8] rounded-full px-5 py-2 text-[#818181] text-sm font-semibold">
        mic***@inpathgroup.africa
      </div>
      <br />
      <p className="font-semibold text-primary cursor-pointer hover:underline">
        Resend Link
      </p>
    </div>
  );
}

export default VerifyAccount;
