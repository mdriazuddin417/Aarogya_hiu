import React, { useState } from "react";

import ScanCode from "./ScanCode";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInWithGmail from "./SignInWithGmail";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
// import { toast } from "react-hot-toast"
import SideText from "./SideText";
import "./authentication.css";
import { login } from "../../features/counter/userModeSlice";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recapture, setRecapture] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // const [signInWithEmailAndPassword, user, loading, error] =
  //   useSignInWithEmailAndPassword(auth);

  // if (user) {
  //   toast.success("Login Successfully!");
  //   navigate(from, { replace: true });
  // }
  const onChange = (value) => {
    console.log("Captcha value:", value);
    setRecapture(!recapture);
  };

  const handleLogin = () => {
    dispatch(login());
    toast.success("Login Successfully!");
    navigate(from, { replace: true });
  };

  return (
    <div className="">
      <div className="grid lg:grid-cols-5  grid-cols-1 h-screen relative">
        <div className="absolute top-5 left-5">
          <img src={logo} alt="logo" className="w-[30%] " />
        </div>
        <div className="gap-3 mt-[15%] flex flex-col  justify-center items-center col-span-2">
          <h2 className="text-black lg:text-3xl text-2xl  font-bold ">
            Welcome back{" "}
          </h2>

          <div className="w-[75%] space-y-3 ">
            <div className="w-full space-y-3">
              <div className="form relative">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-textbox "
                  placeholder=" "
                />
                <label htmlFor="" className="login-form-label">
                  Company Email
                </label>
              </div>
              <div className="form relative">
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-textbox "
                  placeholder=" "
                />
                <label htmlFor="" className="login-form-label">
                  Password
                </label>
              </div>
            </div>

            <div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </div>

            {/* <p className="text-black ">Forget Password ?</p> */}

            <button
              disabled={!email || !password || !recapture}
              onClick={handleLogin}
              // onClick={() => signInWithEmailAndPassword(email, Otp)}
              className="  w-full lg:h-[70px]  md:h-[60px] h-[50px] bg-primary disabled:bg-gray-300 lg:text-[22px] text-lg font-bold rounded text-white"
            >
              Login
            </button>

            {/* <SignInWithGmail /> */}
          </div>
          {/* <ScanCode font={"text-black font-bold"} />
          <p className="font-semibold lg:text-xl text-lg text-center">
            Do not have an account?
            <span className="text-primary font-bold cursor-pointer">
              <Link to={"/create"}>Signup Here</Link>
            </span>
          </p> */}
        </div>

        <SideText />
      </div>
    </div>
  );
};

export default Login;
