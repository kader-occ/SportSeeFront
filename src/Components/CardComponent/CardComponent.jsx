import React from "react";
import "./CardComponent.css";

export const CardComponent = ({ iconPath, data, unite, type }) => {
  return (
    <div className="card">
      <img src={iconPath} className="card-icon" alt="icon" />
      <div className="card-infos">
        <h2>
          {data} {unite}
        </h2>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default CardComponent;
