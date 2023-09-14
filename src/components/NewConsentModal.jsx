import React, { useEffect, useState } from "react";
import HealthInfoType from "./HealthInfoType";
import moment from "moment-timezone";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillCheckCircle } from "react-icons/ai";

const init = {
  description: "",
  patient_identifier: "",
  purpose_of_request: "",
  health_info_from: "",
  health_info_to: "",
  consent_expire: "",
  consent_create: "",
};

const NewConsentModal = () => {
  const [consent, setConsent] = useState({ ...init });
  const [isFormValid, setIsFormValid] = useState(false);
  const [idVerified, setIdVerified] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const [health_info_type, setHealth_info_type] = useState([]);
  const convertToIST = (datetime) => {
    return `${moment(datetime)
      .tz("Asia/Kolkata")
      .format("YYYY-MM-DDTHH:mm:ss")}Z`;
  };

  const body = {
    expiryTime: consent.consent_expire,
    consentCreatedTime: convertToIST(new Date()),
    consent: {
      purpose: {
        text: consent.description,
        code: "CAREMGT",
      },
      patient: {
        id: consent.patient_identifier,
      },
      hiu: {
        id: "arogyaId-facility",
      },
      requester: {
        name: "Dr. Manjus6788",
        identifier: {
          type: "REGNO",
          value: "MH10013",
          system: "https://www.mciindia.org",
        },
      },
      hiTypes: health_info_type,
      permission: {
        accessMode: "VIEW",
        dateRange: {
          from: convertToIST(consent.health_info_from),
          to: convertToIST(consent.health_info_to),
        },
        dataEraseAt: convertToIST(consent.consent_expire),
        frequency: {
          unit: "HOUR",
          value: 1,
          repeats: 0,
        },
      },
    },
  };

  const handleSubmit = async () => {
    console.log(body);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/hiuinitiateconsent`, body)
      .then((response) => {
        if (response.status === 202) {
          toast.success(" consent send successfully");
        }
      })
      .catch((error) => {
        toast.error("Something wrong ? ");
        console.error("this is the error", error);
      });

    setConsent({ ...init });
    setHealth_info_type([]);
  };

  // Track form validity

  useEffect(() => {
    // Check form validity whenever consent data changes
    const isValid =
      // consent.patient_identifier &&
      consent.purpose_of_request &&
      health_info_type.length > 0 &&
      consent.health_info_from &&
      consent.health_info_to &&
      consent.consent_expire &&
      consent.description;

    setIsFormValid(isValid);
  }, [consent]);

  const findPatient = async () => {
    setStatusLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/findPatient`,
        {
          healthID: consent.patient_identifier,
        }
      );
      if (response.status === 202) {
        toast.success("Patient verification request sent");
        const intervalId = setInterval(() => {
          patientFetchStatus(intervalId);
        }, 1000);
        setStatusLoading(false);
      }
    } catch (error) {
      setStatusLoading(false);
      toast.error("Patient ID is not available");
      console.error("Error:", error);
    }
  };

  const patientFetchStatus = async (intervalId) => {
    console.log("Fetching status...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/fetchStatus`
      );
      if (response.status === 202) {
        setIdVerified(response.data.data);
        toast.error("Try again !!");
        clearInterval(intervalId);
      }
    } catch (error) {
      setStatusLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <dialog id="new_consent" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div>
            <h2 className="text-xl font-medium my-2">Consent request form</h2>
            <div className="divider"></div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium ">
                All the fields are mandatory
              </h4>
              <div className="flex items-center justify-start  flex-wrap">
                <h3 className="text-lg md:w-[250px]">Patient identifier</h3>
                <div className="flex justify-start items-center gap-5  relative ">
                  <input
                    value={consent.patient_identifier}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        patient_identifier: e.target.value,
                      })
                    }
                    className="input input-bordered w-full md:w-[250px]"
                  />

                  {idVerified && (
                    <AiFillCheckCircle className=" text-green-500 text-xl absolute -top-1 right-[30%]" />
                  )}

                  {consent.patient_identifier.length > 0 && (
                    <div
                      onClick={findPatient}
                      className="bg-green-500 px-5 py-1 rounded-full text-white font-bold cursor-pointer hover:scale-95 transform duration-200"
                    >
                      {statusLoading
                        ? "Loading..."
                        : idVerified
                        ? "verified"
                        : "verify"}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-start  flex-wrap">
                <h3 className="text-lg md:w-[250px]">Purpose of request</h3>
                <div>
                  <select
                    value={consent.purpose_of_request}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        purpose_of_request: e.target.value,
                      })
                    }
                    className="select select-bordered w-full md:w-[250px]"
                  >
                    <option value="">Please choose an option</option>
                    <option value={"Care Management"}>Care Management</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Health info from</h3>
                <div>
                  <input
                    value={consent.health_info_from}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        health_info_from: e.target.value,
                      })
                    }
                    type="datetime-local"
                    className="input input-bordered w-full md:w-[250px]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Health info to</h3>
                <div>
                  <input
                    value={consent.health_info_to}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        health_info_to: e.target.value,
                      })
                    }
                    type="datetime-local"
                    className="input input-bordered w-full md:w-[250px]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Health info type</h3>
                <div>
                  <HealthInfoType
                    setHealth_info_type={setHealth_info_type}
                    health_info_type={health_info_type}
                  />
                </div>
              </div>

              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Consent Expire</h3>
                <div>
                  <input
                    value={consent.consent_expire}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        consent_expire: e.target.value,
                      })
                    }
                    type="datetime-local"
                    className="input input-bordered w-full md:w-[250px]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Description</h3>
                <div>
                  <textarea
                    value={consent.description}
                    className="textarea textarea-bordered md:w-[450px] w-full"
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        description: e.target.value,
                      })
                    }
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-center flex-row items-center mt-5">
            <button
              disabled={!isFormValid}
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Request Consent
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default NewConsentModal;
