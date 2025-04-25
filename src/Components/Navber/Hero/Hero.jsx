import React, { useContext } from "react";
// import bannerimg from "../../../assets/banner-img-1.png";
import { HomeDataContext } from "../../../Pages/Home";

const Hero = () => {
  const { banner_img, handleSearch, value ,setValue} = useContext(HomeDataContext);

  return (
    <div className="py-8 bg-base-200 border-4 rounded-2xl border-white  flex md:flex-col flex-col-reverse">
      <div className="text-center w-3/4 mx-auto py-2">
        <h1 className="text-xl md:text-5xl font-bold">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="py-6 text-md md:text-md">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <form onSubmit={handleSearch}>
          <input
            className="input rounded-full w-100% mb-4"
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            name="name"
            placeholder="Text here search All"
          />
          <input
            className="btn bg-[#176AE5] text-white rounded-full mb-4"
            type="submit"
            value="Search Now"
          />
        </form>
      </div>
      <div className="flex mb-8 flex-col w-10/12 md:w-5/12 justify-center items-center mx-auto  md:flex-row gap-4">
        {/* <img className=" w-full   m-0" src={bannerimg} alt="" /> */}
        {banner_img.map((photo, index) => (
          <img
            key={index}
            className=" w-full rounded-2xl  "
            src={photo.img}
            alt=""
          />
        ))}
      </div>
      {/* *********************Check ************** */}
      {/* <div className=" grid grid-cols-2 flex-col w-10/12 md:w-5/12 justify-center items-center mx-auto  md:flex-row gap-4">
      <div className="avatar col-span-1">
          <div className="w-full rounded mx-auto">
            <img
              className="w-full rounded-2xl mx-auto"
              src={bannerimg}
            />
          </div>
        </div>
        <div className="avatar col-span-1">
          <div className="w-fullrounded mx-auto">
            <img
              className="w-96 rounded-2xl mx-auto"
              src="https://i.ibb.co.com/fzm4RWdy/IMG-20210810-221115.jpg"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
