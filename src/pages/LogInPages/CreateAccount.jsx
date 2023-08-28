// import React, { useState } from "react";

import ScanCode from "./ScanCode";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
import logo from "../../assets/logo.png";
import SideText from "./SideText";
const CreateAccount = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-5  grid-cols-1 h-screen relative">
        <div className="absolute top-5 left-5">
          <img src={logo} alt="logo" className="w-[30%]" />
        </div>
        <div className="  flex flex-col col-span-2  justify-center items-center p-5  gap-5">
          <h2 className="text-black lg:text-3xl md:text-2xl text-xl font-bold text-center mt-[15%]">
            Create your Knoct account{" "}
          </h2>
          <ScanCode font={"text-gray-500 font-semibold"} />
          <div className="w-full  px-5 space-y-5 py-7">
            <div className="flex justify-center flex-col items-center gap-5">
              <button className="  w-full lg:h-[70px] h-[50px] md:h-[60px] bg-primary text-xl lg:text-[22px] font-bold rounded text-white">
                Submit
              </button>
              <div className="divider font-bold">OR</div>{" "}
              <div className="w-full">
                <Link to={"/signupemail"}>
                  <button className="  w-full lg:h-[70px] h-[50px] md:h-[60px] bg-accent   text-xl lg:text-[22px] font-bold rounded text-white flex justify-center items-center gap-2">
                    {" "}
                    <FiMail className="4xl" /> Signup with email
                  </button>
                </Link>
              </div>
              <p className="font-semibold lg:text-xl text-lg text-center">
                Already have an account?
                <span className="text-primary font-bold cursor-pointer">
                  {" "}
                  <Link to={"/login"}>Login</Link>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <SideText />
      </div>
    </div>
  );
};

export default CreateAccount;
