import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ConsentTable = ({ data }) => {
  const navigate = useNavigate();

  const handleData = (item) => {
    if (!item?.expiryTime) {
      console.log("No expiry time provided");
      return;
    }

    const currentDateTime = new Date(); // Create a Date object for the current date and time
    const expiryDateTime = new Date(item.expiryTime); // Parse the expiryTime string into a Date object

    if (expiryDateTime < currentDateTime) {
      console.log("Time has expired");
      window.expired.showModal();
      // Handle the case where the time has expired (item.expiryTime is in the past)
    } else {
      console.log("Time has not expired");
      // Handle the case where the time has not expired (item.expiryTime is in the future)
      navigate(`/health_data/${item?.consentID}`);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-auto table-compact table-zebra w-full">
        <thead>
          <tr className="bg-primary">
            <th className="th"></th>

            <th className="th">Patient ID</th>
            <th className="th">Request Status</th>
            <th className="th">Consent create on</th>
            <th className="th">Consent granted on</th>
            <th className="th">Consent expire on</th>
            <th className="th"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item._id}>
              <td className="font-bold text-gray-400 td"> {index + 1}</td>

              <td className=" td">{item.patientID}</td>
              <td className="">
                <div className="flex items-center td uppercase">
                  {item.status ? item.status : "Requested"}
                </div>
              </td>
              <td className="">
                <div className="flex items-center td">
                  {item.consentCreatedTime.substring(0, 10)}
                </div>
              </td>
              <td className="">
                <div className="flex items-center td">
                  {item.timestamp.substring(0, 10)}
                </div>
              </td>
              <td className="">
                <div className="flex items-center td">
                  {item.expiryTime.substring(0, 10)}
                </div>
              </td>

              <td className=" font-bold text-2xl">
                <button onClick={() => handleData(item)}>
                  <AiOutlineRight className="text-primary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="expired" className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center">
            This consent has expired.!!
          </h3>

          <div className="modal-action flex justify-center">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ConsentTable;
