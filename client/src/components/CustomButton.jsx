import React from "react";

import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ title, type, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
   
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
