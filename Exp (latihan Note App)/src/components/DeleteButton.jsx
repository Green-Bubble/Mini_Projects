import React from "react";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ onDelete, id }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="action"
      title="delete"
      onClick={() => {
        navigate("/");
        onDelete(id);
      }}
    >
      <FiTrash />
    </button>
  );
};

export default DeleteButton;
