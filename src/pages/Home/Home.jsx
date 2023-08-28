import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

import { GrInfo } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";

import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/shared/Header";

const Home = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Header />
          {/* Page content here */}
          <hr />
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu lg:p-5 md:p-4 p-3  w-[50%] lg:w-full  bg-[#F8FAFB] space-y-3 text-[16px] font-semibold text-[#44566C] h-screen">
            <div className=" flex justify-center items-center my-3">
              <h1 className="text-2xl font-bold text-primary select-none">
                Aarogya ID (HIU)
              </h1>
            </div>
            {/* <!-- Sidebar content here --> */}
            <li id="sidebar">
              <NavLink to={"/"}>
                <span>
                  <BiHomeAlt className="text-xl" />
                </span>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
