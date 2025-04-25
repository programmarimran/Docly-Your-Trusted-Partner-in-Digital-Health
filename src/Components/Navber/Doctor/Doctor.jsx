import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { NavLink } from "react-router";
const Doctor = ({doctor}) => {
  // console.log(doctor);
  const {name,image,experience,education,registration_number,available_today,id}=doctor ||{}
  return (
    <>
      <div className="  card bg-white p-2 md:p-8 shadow-sm md:m-4 mx-auto w-[95%] sm:w-[90%] md:w-full md:h-full">
        
        <div className="avatar">
          <div className="w-70 rounded-2xl mx-auto">
            <img
              className=" mx-auto object-top"
              src={image}
            />
          </div>
        </div>
        <div className="card-body ">
          <div className="flex flex-col xl:flex-row gap-4">
            <button className="btn btn-outline btn-primary border-[#09982F20] rounded-full text-[#09982F] bg-[#09982F10]">
              {available_today?'🟩Abailable':'🟥Not Available'}
            </button>
            <button className="btn btn-outline text-base  btn-small border-[#176AE520] rounded-full text-[#176AE5] bg-[#176AE510]">
              {experience} 
              {/* .split(" ").slice(0,3) */}
            </button>
          </div>
          <h2 className="card-title text-2xl font-extrabold text-[#0F0F0F]">
            {name}
          </h2>
          <p className=" text-base font-normal text-[#0F0F0F99]">
            {education}
          </p>
          <span className="border-b-4 border-dashed border-[#0F0F0F20]"></span>
          <p className=" text-base font-normal text-[#0F0F0F99] flex  items-center">
            <FaRegRegistered></FaRegRegistered>{registration_number}
          </p>
         <NavLink to={`/details/${id}`}>
         <button className="btn btn-outline btn-secondary border-[#176AE5] rounded-full text-[#176AE5] bg-white">
            View Details
          </button>
         </NavLink>
        </div>
      </div>

      
    </>
  );
};

export default Doctor;
