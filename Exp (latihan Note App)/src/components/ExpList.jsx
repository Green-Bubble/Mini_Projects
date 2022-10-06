import React from "react";
import { showFormattedDate } from "../utils";
import ExpItem from "./ExpItem";

const ExpList = ({ exps }) => {
  console.log(exps);
  let empty = true;
  if (exps.length) {
    empty = false;
  }

  if (empty) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Note is Empty</p>
      </section>
    );
  } else {
    return (
      <section className="notes-list">
        {exps.map((exp) => {
          return <ExpItem key={exp.id} id={exp.id} title={exp.title} body={exp.body} createdAt={showFormattedDate(exp.createdAt)} />;
        })}
      </section>
    );
  }
};

export default ExpList;
