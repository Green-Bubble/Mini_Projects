import React from "react";
import { FiArchive } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ArchiveButton = ({ onArchive, id }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="action"
      title="archive"
      onClick={() => {
        onArchive(id);
        navigate("/archive");
      }}
    >
      <FiArchive />
    </button>
  );
};

export default ArchiveButton;
