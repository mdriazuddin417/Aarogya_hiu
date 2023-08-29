import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ConsentTable = ({ data }) => {
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
          {data.data?.map((item, index) => (
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
                <Link to={`/health_data`}>
                  <AiOutlineRight className="text-primary" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsentTable;
