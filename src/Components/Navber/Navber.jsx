import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
const Navber = () => {
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
    <div className="navbar  p-0 m-0 max-w-7xl w-[95%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-xl menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to={"/"}>
          <div className="flex justify-center items-center">
            <img className="w-8 h-8 rounded-full" src={logo} alt="" />
            <h1 className=" font-bold text-3xl">Docly</h1>
          </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="py-1 px-4 md:py-2 md:px-6 rounded-full text-white bg-[#176AE5]">
          Emergency
        </button>
      </div>
    </div>
  );
};

export default Navber;
