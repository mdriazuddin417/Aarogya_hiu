import React from "react";

const Loading = () => {
  return (
    <div>
      <button
        type="button"
        className="bg-purple-500 px-8 py-2 text-white rounded flex justify-center items-center"
        disabled
      >
        <div
          className="
    spinner-border
    animate-spin
    inline-block
    w-5
    h-5
    border-4
    rounded-full
    text-white
    mr-2
  "
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        Processing...
      </button>
    </div>
  );
};

export default Loading;
