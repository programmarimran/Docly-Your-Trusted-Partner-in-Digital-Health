import React, { useContext, useEffect, useState } from "react";
import Doctor from "../Navber/Doctor/Doctor";
import { HomeDataContext } from "../../Pages/Home";

const Doctors = () => {
  const {sendDoctor}=useContext(HomeDataContext)
  console.log(sendDoctor)
  const doctors=sendDoctor
  const [showAll,setShowAll]=useState(false);
  const [showDoctors,setShowDoctors]=useState([]);
  const handleShowAllButton=()=>{
    setShowAll(!showAll)
  }
  useEffect(()=>{
    const showDoctorsData=showAll?doctors:doctors.slice(0,6)
    setShowDoctors(showDoctorsData)
    // !showAll&&window.scrollTo(0,0)
    !showAll&&window.scrollTo({top: 0, behavior: "smooth"});
  },[showAll,doctors])

//  console.log(doctors)
  return (
    <div className="py-20">
        <h1 className=" text-4xl font-extrabold text-center">Our i Best Doctors</h1>
        <p className="text-base font-normal text-center w-4/5 mx-auto mt2">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        
        {
        showDoctors?.map(doctor=><Doctor key={doctor.id} doctor={doctor}></Doctor>)
      }
      </div>
      <button onClick={handleShowAllButton} className=' flex justify-center items-center mx-auto py-1 py-2 px-6 rounded-full text-white bg-[#176AE5] mt-10'>{showAll?'Show Less Doctors':'Show All Doctors'}</button>
    </div>
  );
};

export default Doctors;
