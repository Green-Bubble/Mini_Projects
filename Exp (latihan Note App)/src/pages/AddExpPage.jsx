import React from "react";
import { useNavigate } from "react-router-dom";
import ExpInput from "../components/ExpInput";
import { addNote } from "../utils/utility";

const AddExpPage = () => {
  const navigate = useNavigate();

  function addExpHandler(exp) {
    addNote(exp);
    navigate("/");
  }

  return (
    <section className="add-new-page">
      <ExpInput addNote={addExpHandler} />
    </section>
  );
};

export default AddExpPage;
