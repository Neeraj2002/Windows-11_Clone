import React from "react";
//CSS
import "./RecommendedItem.css";

const RecommendedItem = ({ icon, heading, text, classList }) => {
  return (
    <div className={`recommended-item-box ${classList && classList}`}>
      <img src={icon && icon} className="recommended-item-image" />
      <div className="">
        <p className="paragraph font-bold">{heading && heading}</p>
        <p className="paragraph ">{text && text}</p>
      </div>
    </div>
  );
};

export default RecommendedItem;