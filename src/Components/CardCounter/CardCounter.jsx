import React, { useContext } from "react";
import CountUp from "react-countup";
import { HomeDataContext } from "../../Pages/Home";
const CardCounter = () => {
  const services = useContext(HomeDataContext);
  const { medical_services } = services;
  return (
    <div className="">
      <h1 className=" text-4xl font-extrabold text-center">
        We Provide Best Medical Services
      </h1>
      <p className="text-base font-normal text-center w-4/5 mx-auto mt2">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mb-20 mt-5 ">
        {medical_services?.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 space-y-2 text-center"
          >
            <img className=" mx-auto" src={service.image} alt="" />
            <h1 className=" text-2xl font-bold">
              {
                <CountUp
                  start={0}
                  end={service.quantity}
                  duration={
                    service.quantity < 500
                      ? 5
                      : service.quantity < 1000
                      ? 8
                      : 10
                  }
                  suffix="+"
                />
              }
            </h1>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCounter;
