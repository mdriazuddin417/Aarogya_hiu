import React from "react";
import { Link } from "react-router-dom";
import { TbReload } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { consentList } from "../../constant/consentLists";
import NewConsentModal from "../../components/NewConsentModal";

const Consent = () => {
  return (
    <div>
      <div className=" space-y-5 mt-5  text-[#44566C] text-[15px] ">
        <button
          onClick={() => window.new_consent.showModal()}
          className="btn btn-primary btn-md font-bold flex gap-3 ml-5 "
        >
          NEW CONSENT REQUEST
        </button>
        <div>
          <div className="flex justify-between items-center flex-wrap ml-5">
            <h3 className="text-gray-700 text-2xl font-bold p-2 text-start ">
              Consent List
            </h3>

            <div className="flex justify-center items-center gap-5 m-2 flex-wrap">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-200 py-1 px-2 bg-[#EAEDF0]   rounded  focus:outline-none lg:w-[250px] md:w-[250px] w-full h-[40px] my-shadow"
                style={{ fontFamily: "Arial, FontAwesome" }}
              />

              <button className="btn btn-ghost btn-circle">
                <TbReload className="text-xl text-black" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-auto table-compact table-zebra w-full">
            <thead>
              <tr className="bg-primary">
                <th className="th"></th>
                <th className="th">Name</th>
                <th className="th">Jataayu ID</th>
                <th className="th">Request Status</th>
                <th className="th">Consent create on</th>
                <th className="th">Consent granted on</th>
                <th className="th">Consent expire on</th>
                <th className="th"></th>
              </tr>
            </thead>
            <tbody>
              {consentList?.map((item, index) => (
                <tr key={item.id} className="cursor-pointer">
                  <td className="font-bold text-gray-400 td"> {index + 1}</td>
                  <td className=" td">{item.name}</td>
                  <td className=" td">{item.jataayaId}</td>
                  <td className="">
                    <div className="flex items-center td">
                      {item.request_status}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center td">
                      {item.consent_create}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center td">
                      {item.consent_granted}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center td">
                      {item.consent_expire}
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
      </div>
      <NewConsentModal />
    </div>
  );
};

export default Consent;
