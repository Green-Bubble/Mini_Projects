import React from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";

const ExpDetail = ({ title, createdAt, body }) => {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
    </>
  );
};

export default ExpDetail;
