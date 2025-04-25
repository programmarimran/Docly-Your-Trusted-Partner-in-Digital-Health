import React from "react";
import { NavLink } from "react-router";

const InitialBooking = () => {
  return (
    <div>
      <div className="my-8 space-y-4">
        <h1 className=" text-4xl font-extrabold text-center">
          No Doctor Found
        </h1>
        <p className="text-base text-[#0F0F0F99] font-normal text-center w-4/5 mx-auto mt2">
        We connect you with trusted and experienced doctors from different specialties — anytime, anywhere.
        </p>
        <NavLink to={'/'}><button className="btn btn-secondary flex justify-center items-center mx-auto border-none shadow-none bg-[#176AE5]">View All Doctors</button></NavLink>
      </div>
    </div>
  );
};

export default InitialBooking;
