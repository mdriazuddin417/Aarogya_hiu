import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handlebtn = () => {
    navigate("/");
  };
  return (
    <div className="h-[80vh] gap-2 flex flex-col justify-center items-center">
      <h3 className="font-bold text-9xl text-red-600">404</h3>
      <p className="text-gray-800 text-3xl font-semibold">Page not founded</p>
      <button onClick={handlebtn} className="btn btn-primary">
        ReturnHome
      </button>
    </div>
  );
};

export default NotFound;
