import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";
const Footer = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? " underline" : "")}
      >
        <li className="mx-4">Home</li>
      </NavLink>
      <NavLink
        to={"/bookings"}
        className={({ isActive }) => (isActive ? " underline" : "")}
      >
        <li className="mx-4">My-Bookings</li>
      </NavLink>
      <NavLink
        to={"/blogs"}
        className={({ isActive }) => (isActive ? " underline" : "")}
      >
        <li className="mx-4">Blogs</li>
      </NavLink>
      <NavLink
        to={"/contactus"}
        className={({ isActive }) => (isActive ? " underline" : "")}
      >
        <li className="mx-4">Contact Us</li>
      </NavLink>
    </>
  );
  return (
    <div className="bg-white">
      <footer className="footer w-xsm footer-horizontal footer-center max-w-[1500px] mx-auto text-base-content rounded py-8">
        <div className="flex justify-center items-center">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <h1 className=" font-bold text-3xl">Docly</h1>
        </div>
        <ul className="flex justify-center text-sm md:text-2xl border-b-1 pb-7 border-gray-400">
          {links}
        </ul>
        <nav>
          <div className="grid grid-flow-col gap-9">
            <a
              target="-blank"
              href="https://www.facebook.com/mdimran.hasan.79827803"
            >
              {" "}
              <FaFacebook color="#176AE5" size={30}></FaFacebook>
            </a>
            <a target="-blak" href="https://www.youtube.com/@techmorebd1">
              {" "}
              <FaYoutube color="red" size={30}></FaYoutube>
            </a>
            <a
              target="-blank"
              href="https://www.linkedin.com/in/md-imran-hasan-664907354/"
            >
              {" "}
              <FaLinkedin color="#176AE5" size={30}></FaLinkedin>
            </a>
            <a
              target="-blank"
              href="https://github.com/programmarimran?tab=repositories"
            >
              <FaGithub size={30}></FaGithub>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
