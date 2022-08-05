import React,{useState} from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {CheckIcon} from "@heroicons/react/solid"
function SignupForm({setCardNumber,setCardHolderName,setCvcNumber}) {
  const schema = yup.object().shape({
    cardHolderName: yup.string().required("Can't be blank"),
    cardNumber: yup.number().required("Can't be blank").typeError("Wrong format, numbers only"),
    cvc:yup.string().required("Can't be blank"),
    month: yup.number().max(12,"max value 12").required("Can't be blank").typeError("Wrong format, numbers only"),
    year: yup.number().required("Can't be blank").typeError("Wrong format, numbers only"),
    
  });
  const [isSubmiited,setIsSubmitted]=useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    (isSubmiited)?
      (
        <div className="lg:w-[370px]  h-fit mx-10 lg:mx-auto mt-28 lg:mt-60 font-semibold text-center">
        <div className="w-16 h-16 rounded-full pt-3 mx-auto bg-round-gradient bg-no-repeat bg-cover">
          <CheckIcon className="h-10  mx-auto text-white" /> 
        </div>
          <h4 className="text-2xl text-gray-900 mt-7">THANK YOU !</h4>
          <p className="text-lg text-gray-400 mt-3 ">We've added your card details</p>
      <button type="submit" onClick={()=>setIsSubmitted(false)} className="w-full p-2 bg-gray-900 rounded-md text-white mt-7">Continue</button>
        </div>
      ):(

        
        <form className="lg:w-[370px]  h-fit mx-10 lg:mx-auto mt-28"
            onSubmit={handleSubmit(()=>{
              setIsSubmitted(true);
              reset();
              })}
    >
      <div className="flex flex-col relative mt-5">
        <label className="">CARDHOLDER NAME</label>
        <input  placeholder="e.g Jane Appleased"  type="text" className={`w-full p-2 border rounded-md mt-1 ${errors.cardHolderName?"border-red-500":"border-purple-900"}`}  
           {...register("cardHolderName")}
           onChange={(e)=>{setCardHolderName(e.target.value)}}

              autoComplete="off"
        />
            <p className={` text-red-500`}>{errors.cardHolderName?.message}</p>

      </div>

      <div className="flex flex-col relative mt-5">
        <label className="">CARDNUMBER</label>
        <input  placeholder="e.g 1234 5678 9123 0000" maxLength="16" className={`w-full p-2 border rounded-md mt-1 ${errors.cardNumber?"border-red-500":"border-purple-900"} `}
         
              {...register("cardNumber")}
              onChange={(e)=>{setCardNumber(e.target.value)}}
              autoComplete="off"
        />
            <p className={` text-red-500`}>{errors.cardNumber?.message}</p>

      </div>

    <div className="flex flex-row justify-between w-full mt-5">
        <div className="flex flex-col">
        <label className="">EXP. DATE (MM/YY)</label>
        <div className="flex flex-row">
        <input placeholder="MM"  className={` font-semibold w-24 p-2 border rounded-md mt-1 ${errors.month?"border-red-500":"border-purple-900"} `}
         
         {...register("month")}
         autoComplete="off"
   />
     <input placeholder="YY"  className={`ml-2  font-semibold w-24 p-2 border rounded-md mt-1 ${errors.year?"border-red-500":"border-purple-900"} `}
         
         {...register("year")}
         autoComplete="off"
   />
        </div>
        <p className={` text-red-500`}>{(errors.month && errors.year) && errors.month?.message}</p>

        </div>
    <div className="flex flex-col relative w-fit ">
        <label className="">CVC</label>
        <input placeholder="e.g. 123"  className={` font-semibold w-40 p-2 border rounded-md mt-1 ${errors.cvc?"border-red-500":"border-purple-900"} `}
         
              {...register("cvc")}
              onChange={(e)=>setCvcNumber(e.target.value)}
              autoComplete="off"
        />
            <p className={` text-red-500`}>{errors.cvc?.message}</p>

      </div>
    </div>
      <button type="submit" className="w-full p-2 bg-gray-900 rounded-md text-white mt-7">Confirm</button>
    
    </form>
      )
  );
}

export default SignupForm;
