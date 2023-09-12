import axios from "axios";
import React, { useState } from "react";
import ConsentArtefactModal from "../../components/ConsentArtefactModel";
import { fetchDat, hiUConsent } from "../../constant/data";
import HIUConsent from "../../components/HIUConsent";
import { toast } from "react-hot-toast";
const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hiuConsentData, setHIUConsentData] = useState([]);

  const getData = async () => {
    setLoading(true);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/fetchConsentIDHIU`)
      .then((response) => {
        if (response.status === 202) {
          console.log("this is data from fetchconset", response.data);
          setData(response.data);
          setLoading(false);
          window.consent.showModal();
        }
      })
      .catch((error) => {
        toast.error("Something is wrong ?");
        console.error("this is the error", error);
        setLoading(false);
      });
  };
  const getHIUConsent = async (consentId) => {
    console.log("this function after 4 seconds");

    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/getHIUConsentArtefactData`, {
        consentId: consentId,
      })
      .then((response) => {
        if (response.status === 202) {
          setHIUConsentData(response.data.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("inside error function");
        console.error("this is the error", error);
        toast.error("Something is wrong ?");
      });

    setVisible(false);
  };

  return (
    <>
      <div className="w-full p-5">
        {hiuConsentData.length > 0 ? (
          <HIUConsent data={hiuConsentData[0]} />
        ) : (
          <div className="h-[80vh] flex  justify-center items-center w-full">
            <button
              onClick={getData}
              disabled={loading || visible}
              className="btn btn-primary btn-md font-bold flex gap-3 ml-5  disabled:bg-gray-200"
            >
              {loading && !visible ? (
                <div className="flex items-center gap-4">
                  <span className="loading loading-spinner loading-sm"></span>
                  <p>Loading...</p>
                </div>
              ) : (
                !visible && "Show linked records"
              )}
              {!loading && visible ? (
                <div className="flex items-center gap-4">
                  <span className="loading loading-spinner loading-sm"></span>
                  <p>Loading...</p>
                </div>
              ) : null}
            </button>
          </div>
        )}
      </div>
      <ConsentArtefactModal
        data={data}
        getHIUConsent={getHIUConsent}
        setVisible={setVisible}
      />
    </>
  );
};

export default DataFetch;
