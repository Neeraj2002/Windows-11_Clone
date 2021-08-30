import React from "react";
//CSS
import "./PinnedItem.css";

const PinnedItem = ({ icon, title, classList }) => {
  return (
    <div className={`pinned-item ${classList && classList}`}>
      <img src={icon && icon} className="pinned-image" />
      <p className="pinned-text secondary-heading">{title && title}</p>
    </div>
  );
};

export default PinnedItem;
