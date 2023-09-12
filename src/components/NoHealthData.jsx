import { useNavigate } from "react-router-dom";

const NoHealthData = () => {
  const navigate = useNavigate();
  return (
    <div>
      <dialog id="no_data" className="modal">
        <form
          method="dialog"
          className="modal-box sm:w-[300px] w-full max-w-5xl"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-xl font-medium my-2">
              Data transfer still in progress
            </h2>
            <button
              onClick={() => navigate("/")}
              className="btn btn-primary btn-md font-bold flex gap-3 ml-5 "
            >
              Consent list
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default NoHealthData;
