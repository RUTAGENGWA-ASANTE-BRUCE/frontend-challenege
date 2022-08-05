import React, { useState} from "react";
import SignupForm from "../components/SignupForm";
const card1 = require("../images/bg-card-back.png");
const card2 = require("../images/bg-card-front.png");
function SignupPage() {
  const [cardNumber,setCardNumber]=useState("0000 0000 0000 0000")
  const [cardHolderName,setCardHolderName]=useState("JANE APPLEASED")
  const [cvcNumber,setCvcNumber]=useState("000");
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col h-[37vh]  lg:h-[100vh] relative w-full lg:w-[35%] bg-no-repeat bg-cover lg:bg-main-desktop bg-main-mobile">
        <img
          src={card1}
          alt=""
          className="h-48 lg:h-56 absolute right-10 top-8 lg:top-80 lg:-right-40"
        />
          <p className="text-white text-base mt-4 absolute z-50 top-24 lg:top-[400px] right-20 lg:-right-28 ">{cvcNumber}</p>

        <div className="flex flex-col absolute left-16 lg:left-52 top-36 lg:top-28 z-30">
          <div className="flex flex-row">
            <div className="w-10 h-10 bg-white rounded-full" />
            <div className="w-5 h-5 ml-4 border mt-3 border-white  rounded-full" />
          </div>
          <h3 className="text-white text-3xl mt-10">{cardNumber.toUpperCase()}</h3>
          <p className="text-white text-base mt-4">{cardHolderName.toUpperCase()}<span className="ml-32">09/26</span></p>
        </div>
        <img
          src={card2}
          alt=""
          className="h-48 lg:h-56 absolute left-10 top-32 lg:top-16 lg:left-48"
        />
      </div>
      <SignupForm
        setCardHolderName={setCardHolderName}
        setCardNumber={setCardNumber}
        setCvcNumber={setCvcNumber}
      />
    </div>
  );
}

export default SignupPage;
