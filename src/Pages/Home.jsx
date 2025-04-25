import React, { createContext, useEffect, useState } from "react";
import Hero from "../Components/Navber/Hero/Hero";
import Doctors from "../Components/Doctors/Doctors";
import CardCounter from "../Components/CardCounter/CardCounter";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";
export const HomeDataContext = createContext(null);
const Home = () => {
  const data = useLoaderData();
  const { doctors, medical_services, banner_img } = data;
  // console.log(doctors)
  // ***************************************************************** */
  //handiling search
  const [sendDoctor,setSendDoctor]=useState([])

  const [paseedDoctor, setPaseedDoctor] = useState([]);
  const [value, setValue] = useState("");
  const handleSearch = (e) => {
    console.log(value);
    e.preventDefault();
    if (!isNaN(parseInt(value)) || value) {
      const searchingDoctor = doctors.filter(
        (doctor) =>
          doctor.fee === parseInt(value) ||
          doctor.name?.toLowerCase().trim() === value.toLowerCase().trim() ||
          doctor.name.split(" ")[1]?.toLowerCase().trim() ===
            value.toLowerCase().trim() ||
          doctor.education?.split(",")[0].toLowerCase().trim() ===
            value.toLowerCase().trim() ||
          doctor.education.split(" ")[1]?.toLowerCase().trim() ===
            value.toLowerCase().trim() ||
          doctor.speciality.split(" ")[0]?.toLowerCase().trim() ===
            value.toLowerCase().trim() ||
          doctor.speciality.split(" ")[1]?.toLowerCase().trim() ===
            value.toLowerCase().trim() ||
          doctor.speciality.split(" ")[2]?.toLowerCase().trim() ===
            value.toLowerCase().trim()
      );
      setPaseedDoctor(searchingDoctor);
    } else {
      setPaseedDoctor([]);
    }
    setValue("");
  };
  // console.log(paseedDoctor);
  useEffect(()=>{
    if(paseedDoctor.length>0){
      setSendDoctor(paseedDoctor)
    }
    else{
      setSendDoctor(doctors)
    }
  },[paseedDoctor])
  //******************************************************************************* */
  return (
    <>
      <Helmet>
        <title>Docly|HomePage</title>
      </Helmet>
      <HomeDataContext.Provider
        value={{
          medical_services,
          doctors,
          banner_img,
          handleSearch,
          value,
          setValue,
          sendDoctor
        }}
      >
        <div className=" max-w-[1500px] mx-auto">
          <Hero></Hero>
        </div>
        <div className=" max-w-7xl mx-auto">
          <Doctors doctors={doctors}></Doctors>

          <div className=" ">
            <CardCounter></CardCounter>
          </div>
        </div>
      </HomeDataContext.Provider>
    </>
  );
};

export default Home;
