"use client";
import { PasswordRec } from "@/components/passrec/PasswordRec";
import React, { useState } from "react";

const page = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="w-full h-screen flex justify-center ">
      {step === 0 && <PasswordRec />}
      {/* {step === 1 && <SignUpSecond stage={step} nextHandle={handleNext} />}
      {step === 2 && <SignUpThird stage={step} nextHandle={handleNext} />}
      {step === 3 && <SignUpFinal stage={step} />} */}
    </div>
  );
};

export default page;
