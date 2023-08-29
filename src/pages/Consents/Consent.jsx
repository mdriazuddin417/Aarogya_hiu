import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbReload } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { consentList } from "../../constant/consentLists";
import NewConsentModal from "../../components/NewConsentModal";
import axios from "axios";
import ConsentTable from "../../components/ConsentTable";

const Consent = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/getConsentsHIU`)
      .then((response) => {
        if (response.status === 202) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error("this is the error", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
        <ConsentTable data={data} />
      </div>
      <NewConsentModal />
    </div>
  );
};

export default Consent;
