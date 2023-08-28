import React from "react";
import { BiUser } from "react-icons/bi";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineHelp } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useSignOut } from "react-firebase-hooks/auth";
// import auth from "../firebase.init";
const Header = () => {
  // const [signOut] = useSignOut(auth);
  return (
    <div className="navbar bg-base-100 text-[#44566C]">
      <div className="navbar-start space-x-3">
        <div className="dropdown lg:hidden">
          <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
        <div className="form-control relative">
          <input
            type="text"
            placeholder=" Search.."
            className=" py-1 px-2 bg-[#EAEDF0]   rounded  focus:outline-none lg:w-[290px] md:w-[290px] w-full h-[40px] shadow"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
        </div>
      </div>
      <div className="navbar-end space-x-3">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item">
              20
            </span>
          </div>
        </button>
        <div className="dropdown dropdown-end border-l-gray-300 ">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/XYNS2pF/player-5.png" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[255px] space-y-3 z-30"
          >
            <li className="">
              <div className="flex justify-center items-center gap-2 px-2 py-7  bg-[#F4F4F4] rounded-lg">
                <img
                  src="https://i.ibb.co/XYNS2pF/player-5.png"
                  className="w-[60px] h-[60px] rounded-full"
                  alt=""
                />

                <div className="flex flex-col justify-start items-start text-lg">
                  <h3 className="font-semibold">Mark Anderson</h3>
                  <p className="text-gray-300 text-sm">Administrator</p>
                </div>
              </div>
            </li>
            <li>
              <a className="text-[16px] flex justify-start items-center gap-2">
                <BiUser className="text-xl" /> My Profile
              </a>
            </li>
            <li>
              <Link
                to={"setting/generale"}
                className="text-[16px] flex justify-start items-center gap-2"
              >
                <RiSettings5Fill className="text-xl" /> Settings
              </Link>
            </li>
            <li>
              <Link
                to={"support"}
                className="text-[16px] flex justify-start items-center gap-2"
              >
                <MdOutlineHelp className="text-xl" />
                Help/Support
              </Link>
            </li>
            <li>
              <button
                className="text-[16px] flex justify-start items-center gap-2"
                // onClick={() => signOut()}
              >
                <IoLogOutOutline className="text-xl" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
