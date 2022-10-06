import React from "react";
import { FiCheck } from "react-icons/fi";

const DoneButton = ({ addNote }) => {
  return (
    <button type="button" title="done" className="action" onClick={() => addNote()}>
      <FiCheck />
    </button>
  );
};

export default DoneButton;
