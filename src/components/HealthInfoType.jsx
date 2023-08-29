import React, { useState } from "react";

const data = [
  "OP Consultation",
  "Discharge Summary",
  "Immunization Record",
  "Wellness Record",
  "Diagnostic Reports",
  "Prescription",
  "Health Document Record",
];

const HealthInfoType = ({ health_info_type, setHealth_info_type }) => {
  const handleCheckboxChange = (value) => {
    if (health_info_type?.includes(value.replace(/\s+/g, ""))) {
      setHealth_info_type(
        health_info_type?.filter(
          (item) => item.replace(/\s+/g, "") !== value.replace(/\s+/g, "")
        )
      );
    } else {
      setHealth_info_type([...health_info_type, value.replace(/\s+/g, "")]);
    }
  };

  return (
    <div className="">
      <div className="grid grid-rows-4 grid-cols-2 gap-4">
        {data?.map((item, index) => (
          <label
            key={index}
            className="label justify-start cursor-pointer gap-5"
          >
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={health_info_type?.includes(item.replace(/\s+/g, ""))}
              onChange={() => handleCheckboxChange(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default HealthInfoType;
