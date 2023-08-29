import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const HIUConsent = ({ data }) => {
  const [loading, setLoading] = useState(false);
  console.log(data);

  const { careContexts, patientId, status, consentId, hipId } = data;

  const sendRecordRequest = async () => {
    setLoading(true);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/sendRecordRequest`, {
        consentID: consentId,
      })
      .then((response) => {
        if (response.status === 202) {
          //res.status(202).json({ message: 'request sent to gateway!' });
          console.log(response.data);
          toast.success("Request sent to gateway!");
          setLoading(false);
        }
      })

      .catch((error) => {
        toast.error("Something is error");
        console.error("this is the error", error);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="flex flex-wrap  gap-5">
        {careContexts?.map((item, index) => (
          <div
            key={index}
            className="shadow rounded w-[250px]  bg-slate-100 flex justify-center items-start gap-1 flex-col  p-5"
          >
            <h3 className="text-[12px] lg:text-sm text-gray-700 font-semibold">
              Patient ID: {patientId}
            </h3>
            <h3 className="text- text-gray-700 font-semibold">
              HIP ID: {hipId}
            </h3>
            <h3 className="text-[12px] lg:text-sm text-gray-700 font-semibold">
              Status: <span className="text-green-500"> {status}</span>
            </h3>
            <h3 className="text-[12px] lg:text-sm text-gray-700 font-semibold">
              Patient Ref: {item.patientReference}
            </h3>
            <h3 className="text-[12px] lg:text-sm text-gray-700 font-semibold">
              CareContext Ref: {item.patientReference}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center md:mt-10 mt-5">
        <button
          onClick={sendRecordRequest}
          disabled={loading}
          className="btn btn-primary btn-md font-bold flex gap-3 ml-5 disabled:bg-gray-200 "
        >
          {loading ? (
            <div className="flex items-center gap-4">
              <span className="loading loading-spinner loading-sm"></span>
              <p>Loading...</p>
            </div>
          ) : (
            "Record Request"
          )}
        </button>
      </div>
    </div>
  );
};

export default HIUConsent;
