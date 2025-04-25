import React, { createContext, useState } from "react";
import Navber from "../Components/Navber/Navber";
import {  Outlet } from "react-router";
import Footer from "../Components/Navber/Footer/Footer";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "../Utilities/Utilities";
import { toast } from "react-toastify";
export const DoctorAppointmentContaxt = createContext(null);
import { useNavigate } from "react-router";
const Root = () => {
  //handle add handiling
  let navigate = useNavigate();
  const [bookings, setBookings] = useState(getFromLocalStorage());
  const handleClick = (doctor) => {
    const storageId = getFromLocalStorage();
    const exist = storageId.find(
      (booking) => parseInt(booking) === parseInt(doctor.id)
    );
    if (exist) {

      toast.error(`❌ Duplicate appointment! You already booked Dr. ${doctor.name}`);
      
      return;
    } else {
      toast.success(`✅ Your appointment with Dr. ${doctor.name} is confirmed`)
      const remainingStorageId = [...storageId, doctor.id];
      setBookings(remainingStorageId);
      setToLocalStorage(doctor.id);
      navigate('/bookings')
    }
    return
  };
  //handle Remove handiling
  const handleRemove=(doctor)=>{
    const storageId=getFromLocalStorage();
    const remainingId=[...storageId]
    const filteredId=remainingId.filter(data=>data!==doctor.id)
    setBookings(filteredId)
    removeFromLocalStorage(doctor.id)
    
    toast.warning(`Clear the Appointment list ${doctor.name}` )

  }
  //Error handleling
  
  const [isError, setIsError] = useState(false);
  return (
    <div className="bg-base-300 ">
      <div className="flex flex-col min-h-screen ">
        <div className="sticky top-0 bg-base-300 z-1">

        <Navber></Navber>
        </div>
        <div className=" flex-grow w-[95%] mx-auto">
          <DoctorAppointmentContaxt.Provider
            value={{ handleClick, bookings, isError, setIsError,handleRemove}}
          >
            <Outlet></Outlet>
          </DoctorAppointmentContaxt.Provider>
        </div>
        {isError ? "" : <Footer></Footer>}
      </div>
    </div>
  );
};

export default Root;
