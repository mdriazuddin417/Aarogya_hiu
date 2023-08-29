import React, { useState } from "react";

const data = [
  {
    label: "OP Consulation",
    value: false,
  },
  {
    label: "Discharge Summary",
    value: false,
  },
  {
    label: "Immunization Record",
    value: false,
  },
  {
    label: "Wellness Record",
    value: false,
  },
  {
    label: "Diagnostic Reports",
    value: false,
  },
  {
    label: "Prescription",
    value: false,
  },
  {
    label: "Health Document Record",
    value: false,
  },
];

const HealthInfoType = ({ setConsent }) => {
  const [items, setItems] = useState([...data]);

  const handleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].value = !updatedItems[index].value;
    setItems(updatedItems);

    const selectedTypes = updatedItems
      .filter((item) => item.value)
      .map((item) => {
        return `${item.label.replace(/\s+/g, "")}`;
      });

    setConsent(selectedTypes);
  };

  return (
    <div className="">
      <div className="grid grid-rows-4 grid-cols-2 gap-4">
        {items.map((item, index) => (
          <label
            key={index}
            className="label justify-start cursor-pointer gap-5"
          >
            <input
              onChange={() => handleItem(index)}
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={item.value}
            />
            <span className="label-text">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default HealthInfoType;
