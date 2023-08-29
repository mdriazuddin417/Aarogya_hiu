const LoadingModal = () => {
  return (
    <div>
      <dialog id="loading" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <div>
            <h2 className="text-xl font-medium my-2">loading....</h2>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoadingModal;
