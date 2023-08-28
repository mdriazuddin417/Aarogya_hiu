import React from "react";
import code from "../../assets/code.png";
const ScanCode = ({ font }) => {
  return (
    <div className="flex justify-center items-center  flex-col gap-5 text-center mt-[1%]">
      <p className={` lg:text-2xl md:text-2xl text-xl ${font}`}>
        or scan QR code
      </p>
      <img src={code} alt="" className=" md:w-[35%] w-[40%]" />
    </div>
  );
};

export default ScanCode;
