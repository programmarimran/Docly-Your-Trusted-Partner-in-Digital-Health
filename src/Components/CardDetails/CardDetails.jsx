import React, { useContext } from "react";
import { FaRegRegistered } from "react-icons/fa";
import { NavLink, useLoaderData, useParams } from "react-router";
import { DoctorAppointmentContaxt } from "../../Pages/Root";
import Error from "../../Pages/Error";
import { Helmet } from "react-helmet-async";



const CardDetails = () => {
  const {handleClick}=useContext(DoctorAppointmentContaxt)
 const {doctors}=useLoaderData() //destructuring korsi
const params=useParams()//doctor compunent theke Navlink dia pathano id received korsi
  const doctor=doctors?.find(doctor=>doctor.id==params.id); //dynamic  params with parseInt 

  const {name,image,fee,workplace,education,speciality,registration_number,availability,available_today}=doctor ||{}
if(!name){
  return <Error></Error>
}
  //bookinglist state

//  const [isProceed,setIsProceed]=useState(false)
  return (
    <>
    <Helmet>
      <title>{name}</title>
    </Helmet>
    <div className="max-w-7xl mx-auto">
      
    {/* ******************Doctor details Title start***************************************** */}
    <div className="bg-base-100 p-4 rounded-2xl mb-6 py-16 space-y-6">
        <h1 className=" text-4xl font-extrabold text-center">
          Doctor's Profile Details
        </h1>
        <p className="text-base font-normal text-center w-4/5 mx-auto mt2">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      {/* *****************Doctor Details dynamic start************************ */}
      <div className="card lg:card-side bg-base-100 p-4 my-6 rounded-2xl ">
      <div className="avatar">
          <div className="w-72 rounded mx-auto">
            <img
              className="w-70 rounded-2xl mx-auto"
              src={image}
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className=" text-3xl font-extrabold text-[#0F0F0F]">
            {name}
          </h2>
          <p className="text-base font-normal text-[#0F0F0F90]">
            <span>{education}</span>
            <br />
            <span>{speciality}</span>
            <br />
          </p>
          <h1 className=" text-2xl font-extrabold text-[#0F0F0F]">
            <span className=" text-base font-normal text-[#0F0F0F90]">
              Working at
            </span>
            <br />
            {workplace}
          </h1>
          <span className="border-b-4 border-dashed border-[#0F0F0F20]"></span>
          <p className=" text-xl font-medium text-[#0F0F0F99] flex  items-center">
            <FaRegRegistered size={25}></FaRegRegistered> {registration_number}
          </p>
          <span className="border-b-4 border-dashed border-[#0F0F0F20]"></span>

          <div className="flex flex-wrap gap-4 items-center">
            <h4 className=" text-base font-bold">Availability:</h4>
           
            {
              availability
              ?.map((day,index)=>(
                <button key={index} className="btn btn-outline btn-secondary hover:shadow-none border-[#FFA00040] rounded-full text-[#FFA000] bg-[#FFA00010] text-lg">
                {day}
              </button>
              ))
            }
          </div>
          <h3 className=" text-base font-bold">
            Consultation Fee:
            <span className=" text-[#176AE5]">Taka : {fee}</span> (incl. Vat)
            <span className=" text-[#176AE5]">Per consultation</span>
          </h3>
        </div>
      </div>
     
      {/* ****************Book an Appointment start*********************** */}
      <div className="bg-base-100 p-4 rounded-2xl mt-6 mb-24 py-16 space-y-6">
        <h1 className=" text-4xl font-extrabold text-center">
          Book an Appointment
        </h1>
        <div className=" flex flex-col md:flex-row text-center md:justify-between md:px-16">
          <h3 className=" text-xl font-bold ">Availability</h3>
          <button className="py-2 px-4 md:py-4 md:px-8 btn-secondary hover:shadow-none border border-[#09982F80] rounded-full text-[#09982F] bg-[#09982F10] text-lg">
            {
             available_today?'🟩Doctor Available Today':'🟥Doctor not Available Today'
            }
          </button>
        </div>
        <button className="mx-auto md:flex justify-center items-center btn-secondary hover:shadow-none border px-4 md:py-2 py-8
         border-[#FFA00040] rounded-2xl md:rounded-full text-[#FFA000] bg-[#FFA00010] text-lg">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </button>
        
        <button onClick={()=>{handleClick(doctor)
       
          
        }} className="btn mx-16 w-11/12 btn-outline mx-auto flex justify-center items-center btn-secondary hover:shadow-none border-none rounded-full text-white bg-[#176AE5] text-lg">
          Book Appointment Now
        </button>
       
      </div>
    </div>
    </>
  );
};

export default CardDetails;
