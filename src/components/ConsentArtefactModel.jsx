import axios from "axios";
import { useState } from "react";
const ConsentArtefactModal = ({ data, getHIUConsent, setVisible }) => {
  const [consentId, setConsentId] = useState("");
  console.log("data from cnsent artefact",data);
  const handleConsent = async () => {
    setVisible(true);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/fetchConsentArtefact`, {
        consentId: consentId,
      })
      .then((response) => {
        if (response.status === 202) {
          console.log(response.data);
          //setHIULoading(true);
          setTimeout(() => { getHIUConsent(consentId) }, 4000);
          clearTimeout();

        }
      })

      .catch((error) => {
        console.log("inside error function");

        console.error("this is the error", error);
      });

    // setTimeout(() => {
    //   getHIUConsent();
    // }, 4000);
  };

  return (
    <div>
      <dialog id="consent" className="modal">
        <form method="dialog" className="modal-box md:w-2/6 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-xl font-medium my-2">Consent Artefact</h2>

            <div>
              <select
                defaultValue={""}
                value={consentId}
                onChange={(e) => setConsentId(e.target.value)}
                className="select select-primary w-full max-w-xs"
              >
                <option value={""}>Choose your consent ID</option>
                {data?.data?.map((item, index) => (
                  <option key={index} value={item.consentID}>
                    Consent ID (

                    {item.patientID}

                    )
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-action flex justify-center flex-row items-center mt-5">
            <button
              disabled={!consentId}
              onClick={handleConsent}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ConsentArtefactModal;
