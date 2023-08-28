import React from "react";

const HealthData = () => {
  return (
    <div className="p-5">
      <h1 className="text-gray-500 text-xl p-2 text-start font-medium">
        Consent List /{" "}
        <span className=" font-semibold text-gray-700">Health Data</span>
      </h1>
      <h3 className="text-gray-700 text-xl p-2 text-start font-medium">
        Name: Ranveer Uppal
      </h3>
      <div className="my-5 flex flex-col justify-center items-center">
        <h3 className="text-gray-500 text-lg text-start font-medium">
          View by recorded date
        </h3>
        <h3 className="text-gray-500 text-lg  text-start font-medium">
          {"<"} 2/12/2022 {">"}
        </h3>
      </div>

      <div className="space-y-5">
        <h1 className="text-gray-700 text-2xl  text-start font-medium ">
          NDHM DOCTOR FIVE TEST WO UAT
        </h1>
        <div className="p-3 rounded bg-gray-300 flex justify-between items-start">
          <h1 className="text-gray-700 text-lg  text-start font-medium">
            DOCUMENT: PRESCRIPTION
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-700 text-[16px] text-start font-medium">
              Date: <span className="  font-normal">2/12/2022 </span>
            </h3>
            <h3 className="text-gray-700 text-[16px] text-start font-medium">
              Authors:{" "}
              <span className="  font-normal">
                Dr. Ndhm Doctor Five Test Wo Uat
              </span>
            </h3>
            <h3 className="text-gray-700 text-[16px] text-start font-medium">
              Status: <span className="  font-normal">FINAL </span>
            </h3>
          </div>
        </div>
        <div className="p-5 border border-gray-400 rounded-lg">
          <h1 className="text-gray-700 text-lg  text-start font-medium mb-4">
            #Prescription record: OPD Prescription
          </h1>
          <h1 className="text-gray-700 text-sm  text-start font-medium mt-4">
            Attachments (Binary):{" "}
            <span className="link text-blue-600">Link to Attachment</span>
          </h1>
        </div>
      </div>
      <div className="space-y-5 mt-5">
        <h1 className="text-gray-700 text-2xl  text-start font-medium ">
          ABDM WORKSHOP FACILITY
        </h1>
        <div className="p-3 rounded bg-gray-300 flex justify-between items-start">
          <h1 className="text-gray-700 text-lg  text-start font-medium">
            DOCUMENT: CONSULTATION REPORT
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-700 text-[16px] text-start font-medium">
              Date: <span className="  font-normal">2/12/2022 </span>
            </h3>
            <h3 className="text-gray-700 text-[16px] text-start font-medium">
              Authors:{" "}
              <span className="  font-normal">
                Dr. Ndhm Doctor Five Test Wo Uat
              </span>
            </h3>
            <h3 className="text-gray-700 text-[16px] text-start font-medium">
              Status: <span className="  font-normal">FINAL </span>
            </h3>
          </div>
        </div>
        <div className="p-3 border border-gray-400 rounded-lg space-y-5">
          <h1 className="text-gray-700 text-lg  text-start font-medium mb-4 ">
            Encounter
          </h1>
          <div className="pl-4">
            <p>1. ambulatory,finished 01/11/2022</p>
            <p>2. Diagnosis Back Pain</p>
          </div>

          <div className="pl-4">
            <p className="text-gray-700 text-[16px] text-start font-medium mb-4">
              #Chief Complaint Section: Chief Complaints
            </p>
            <div>
              <div className="p-3 rounded bg-gray-300 flex justify-between items-start border border-b border-white">
                <p className="text-gray-700 text-lg  text-start font-medium mb-4 ">
                  CONDITION
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="bg-gray-300">
                      <th>Recorded Date</th>
                      <th>Condition</th>
                      <th>Status</th>
                      <th>Additional Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>
                      <td>Back Pain</td>
                      <td>
                        <div>
                          <p>Severity: Unspecified</p>
                          <p>Clinical Status: Unspecified</p>
                          <p>Verification Status: Unspecified</p>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
                      <th> Date</th>
                      <th>Medication</th>
                      <th>Dosing INstruction</th>
                      <th>Additional Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01/11/2022</td>
                      <td>
                        <div>
                          <p>
                            Diclofenac Get Ip(Diclofenac Deithylamine 1.6%w/w)
                            (active)
                          </p>
                          <p>Reasons Back Pain</p>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>01/11/2022</td>
                      <td>
                        <div>
                          <p>
                            Diclofenac Get Ip(Diclofenac Deithylamine 1.6%w/w)
                            (active)
                          </p>
                          <p>Reasons Back Pain</p>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthData;
