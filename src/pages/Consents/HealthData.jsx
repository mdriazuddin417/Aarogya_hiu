import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { healthDetails } from "../../constant/data";
import NoHealthData from "../../components/NoHealthData";
import CustomModal from "../../utils/CustomModal";

const HealthData = () => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const navigation = useNavigate();

  const getData = async () => {
    setLoading(true);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/getHIUfetchData`, {
        consentID: id,
      })
      .then((response) => {
        if (response.status === 202) {
          setLoading(false);
          setHealthData(response?.data?.data);
          setIsOpen(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsOpen(true);
        console.error("this is the error", error);
        toast.error("Something is wrong?");
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleReNavigate = () => {
    navigation("/");
    setIsOpen(false);
  };
  console.log("health data",healthData);
  return (
    <div className="p-5">
      <h1 className="text-gray-500 text-xl p-2 text-start font-medium">
        <button onClick={() => navigation("/")}> Consent List</button> /{" "}
        <span className=" font-semibold text-gray-700">Health Data</span>
      </h1>

      {healthData?.consentID ? (
        <div>
          <div className="mb-5">
            <h3 className="text-gray-700 text-xl text-start font-medium">
              Name: {healthData?.patientInfo?.name || "No data"}
            </h3>
            <h3 className="text-gray-700 text-xl text-start font-medium">
              Gender: {healthData?.patientInfo?.gender || "No data"}
            </h3>
            <h3 className="text-gray-700 text-xl  text-start font-medium">
              Birth of Date: {healthData?.patientInfo?.birthDate || "No data"}
            </h3>
          </div>

          <div className="space-y-5 ">
            <h1 className="text-gray-700 text-2xl  text-start font-medium ">
              NDHM DOCTOR FIVE TEST WO UAT
            </h1>
            <div className="p-3 rounded bg-gray-300 flex justify-between items-start">
              <h1 className="text-gray-700 text-lg  text-start font-medium">
                DOCUMENT: {healthData?.documentTitle || "No data"}
              </h1>
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-700 text-[16px] text-start font-medium">
                  Date:{" "}
                  <span className="  font-normal">
                    {healthData.medications[0].authoredDate || "No data"}
                  </span>
                </h3>
                <h3 className="text-gray-700 text-[16px] text-start font-medium">
                  Authors:{" "}
                  <span className="  font-normal">
                    {healthData.practitioners[0].name || "No data"}
                  </span>
                </h3>
                <h3 className="text-gray-700 text-[16px] text-start font-medium">
                  Status: <span className="  font-normal">FINAL </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="space-y-5 mt-5">
            <div className="p-3 border border-gray-400 rounded-lg space-y-5">
              <div className="pl-4 ">
                <p className="text-gray-700 text-[16px] text-start font-medium mb-4">
                  #Medication summary document : Medication summary document
                </p>
                <div>
                  <div className="p-3 rounded bg-gray-300 flex justify-between items-start border border-b border-white">
                    <p className="text-gray-700 text-lg  text-start font-medium mb-4 ">
                      MEDICATION
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr className="bg-gray-300">
                          <th>Date</th>
                          <th>Medication</th>
                          <th>Dosing INstruction</th>
                          <th>Doctor name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {healthData?.medications?.map((medication, index) => {
                          return (
                            <tr key={index}>
                              <td>{medication.authoredDate}</td>
                              <td>{medication.medication}</td>
                              <td>{medication.dosageInstruction}</td>
                              <td>{medication.doctorName}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex justify-center">
         
            <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-xl font-medium my-2">
                  Data transfer still in progress
                </h2>
                <button
                  onClick={handleReNavigate}
                  className="btn btn-primary btn-md font-bold flex gap-3 ml-5 "
                >
                  Consent list
                </button>
              </div>
            </CustomModal>
          
        </div>
      )}
      <NoHealthData />
    </div>
  );
};

export default HealthData;
