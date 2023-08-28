import React, { useState } from "react";
import { AiOutlineQrcode } from "react-icons/ai";

import "./authentication.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import SideText from "./SideText";
const SignUpWithEmail = () => {
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth);

  // const handleSignup = () => {
  //   if (email && name && otp && regNumber) {
  //     createUserWithEmailAndPassword(email, otp);
  //   }
  // };

  // if (user) {
  //   toast.success("Create account success.");
  //   navigate(from, { replace: true });
  // }

  return (
    <div className="grid lg:grid-cols-5  grid-cols-1 h-screen relative ">
      <div className="absolute top-5 left-5">
        <img src={logo} alt="logo" className="w-[30%]" />
      </div>
      <div className="  flex flex-col col-span-2  justify-center items-center p-5 gap-5 ">
        <h2 className="text-black text-3xl font-bold mt-[20%]">
          Create your Knoct account
        </h2>
        <div className="w-[90%] space-y-5 px-5">
          <div className="w-full space-y-3 ">
            <div className="form relative">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="textbox "
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                Company name
              </label>
            </div>
            <div className="form relative">
              <input
                type="text"
                onChange={(e) => setRegNumber(e.target.value)}
                className="textbox"
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                Registration Number
              </label>
            </div>
            <div className="form relative">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="textbox"
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                Company Email
              </label>
            </div>
            <div className="form relative">
              <input
                type="text"
                onChange={(e) => setOtp(e.target.value)}
                className="textbox"
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                OTP
              </label>
            </div>
          </div>

          <div>
            {name && otp && regNumber && email ? (
              <button
                // onClick={handleSignup}
                className="  w-full h-[70px] bg-primary text-[22px] font-bold rounded text-white"
              >
                Submit
              </button>
            ) : (
              <button
                disabled
                className="  w-full h-[70px] bg-primary bg-opacity-40  text-[22px] font-bold rounded text-white"
              >
                Submit
              </button>
            )}
          </div>
          <div className="divider font-bold ">OR</div>
          <div>
            <Link to="/create">
              <button className="  w-full h-[70px] bg-accent text-[22px] font-bold rounded text-white flex justify-center items-center gap-2">
                <AiOutlineQrcode className="text-3xl" /> Signup with QR Code
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
      <SideText />
    </div>
  );
};

export default SignUpWithEmail;
