import React, { useEffect, useState } from "react";
import HealthInfoType from "./HealthInfoType";

const init = {
  patient_identifier: null,
  purpose_of_request: null,
  health_info_from: null,
  health_info_to: null,
  health_info_type: [],
  consent_expire: null,
};

const NewConsentModal = () => {
  const [consent, setConsent] = useState({ ...init });
  const [isFormValid, setIsFormValid] = useState(false);
  const handleSetHealthInfoType = (selectedTypes) => {
    setConsent({
      ...consent,
      health_info_type: selectedTypes,
    });
  };

  const handleSubmit = () => {
    console.log("Consent Data:", consent);
  };

  // Track form validity

  useEffect(() => {
    // Check form validity whenever consent data changes
    const isValid =
      consent.patient_identifier &&
      consent.purpose_of_request &&
      consent.health_info_from &&
      consent.health_info_to &&
      consent.health_info_type.length > 0 &&
      consent.consent_expire;

    setIsFormValid(isValid);
  }, [consent]);

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
                <div>
                  <select
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        patient_identifier: e.target.value,
                      })
                    }
                    className="select select-bordered w-full md:w-[250px]"
                  >
                    {" "}
                    <option value="">Please choose an option</option>
                    <option value={"@sbx"}>@sbx</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start  flex-wrap">
                <h3 className="text-lg md:w-[250px]">Purpose of request</h3>
                <div>
                  <select
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
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        health_info_from: e.target.value,
                      })
                    }
                    type="date"
                    className="input input-bordered w-full md:w-[250px]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Health info to</h3>
                <div>
                  <input
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        health_info_to: e.target.value,
                      })
                    }
                    type="date"
                    className="input input-bordered w-full md:w-[250px]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Health info type</h3>
                <div>
                  <HealthInfoType setConsent={handleSetHealthInfoType} />
                </div>
              </div>
              <div className="flex items-center justify-start flex-wrap">
                <h3 className="text-lg md:w-[250px]">Consent Expire</h3>
                <div>
                  <input
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
