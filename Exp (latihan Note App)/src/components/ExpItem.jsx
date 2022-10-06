import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

const ExpItem = ({ id, title, body, createdAt }) => {
  return (
    <article className="note-item">
      <h3 className="note-item-title">
        <Link to={`/exps/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <div className="note-item__body">{parser(body)}</div>
    </article>
  );
};

export default ExpItem;
