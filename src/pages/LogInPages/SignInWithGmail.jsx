import React from "react";
import { FcGoogle } from "react-icons/fc";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SignInWithGmail = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // if (user) {
  //   toast.success("Successfully!!");
  //   navigate("/");
  // }

  return (
    <button
      className="  w-full lg:h-[70px] md:h-[60px] h-[50px] bg-accent  text-lg  lg:text-[22px] font-bold rounded text-white flex justify-center items-center gap-2"
      // onClick={() => signInWithGoogle()}
    >
      <FcGoogle className="text-2xl mr-2" /> Sign in with Gmail
    </button>
  );
};

export default SignInWithGmail;
