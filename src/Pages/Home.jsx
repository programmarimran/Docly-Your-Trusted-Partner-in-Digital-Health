import React, { createContext, useState } from "react";
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
  const [value, setValue] = useState("");
  const [paseedDoctor, setPaseedDoctor] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    setValue(e.target.name.value);

    if (!isNaN(parseInt(value))) {
      const searchingDoctor = doctors.filter((doctor) =>
        console.log(doctor.fee === parseInt(value))
      );
      setPaseedDoctor(searchingDoctor);
    } else {
      return [];
    }
  };
  console.log(paseedDoctor);
//******************************************************************************* */
  return (
    <>
      <Helmet>
        <title>Docly|HomePage</title>
      </Helmet>
      <HomeDataContext.Provider
        value={{ medical_services, doctors, banner_img, handleSearch, value }}
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
