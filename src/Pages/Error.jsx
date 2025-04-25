import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router";
import errorAnimation from '../assets/error.gif'
import { DoctorAppointmentContaxt } from "./Root";
import { Helmet } from "react-helmet-async";
const Error = () => {
  const {setIsError}=useContext(DoctorAppointmentContaxt)
  useEffect(()=>{
    setIsError(true)
    return ()=>{
      setIsError(false)
    }
  },[setIsError])
  return (

    <div className="max-w-7xl mx-auto grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <Helmet>
        <title>Docly| Error page</title>
      </Helmet>
    <div className="text-center">
     
      <img className=' mx-auto' src={errorAnimation} alt="" />
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Sorry, we couldnt find the page youre looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <NavLink
          to='/'
          className="rounded-md bg-[#176AE5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl  "
        >
          Go back home
        </NavLink>
      </div>
    </div>
  </div>
  );
};

export default Error;

// useEffect(() => {
//   setError(true);

//   return () => {
//     setError(false); 
//   };
// }, []);