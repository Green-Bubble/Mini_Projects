import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UnarchiveButton = ({ onUnarchive, id }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="action"
      title="unarchive"
      onClick={() => {
        navigate("/");
        onUnarchive(id);
      }}
    >
      <FiBookOpen />
    </button>
  );
};

export default UnarchiveButton;
