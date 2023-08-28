import React from "react";
import authentication from "../../assets/authenticaion1.png";
import { ImArrowRight2 } from "react-icons/im";
const SideText = () => {
  return (
    <div className="bg-primary  flex flex-col  justify-center items-center text-white  col-span-3  text-center p-10 gap-5">
      <div>
        <h3 className="font-bold lg:text-[30px] text-xl ">Tip of the day :</h3>
        <p className="lg:text-[25px] text-xl">
          Never share your wallet password with anyoune
        </p>
      </div>
      <img src={authentication} alt="" className="lg:w-[60%] w-[40%]" />
      <p className="lg:text-[24px] text-lg text-center">
        The weakeset link in security is the human factor. Never share your
        wallet passsword. Also, never login untrusted devices as the password
        might be save in keychain.
      </p>
      <p className="lg:text-[23px] text-xl font-bold flex justify-center items-center gap-2 cursor-pointer">
        <span> More on blog</span> <ImArrowRight2 />
      </p>
    </div>
  );
};

export default SideText;
