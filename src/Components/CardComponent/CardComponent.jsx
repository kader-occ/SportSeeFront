import React from "react";
import PropTypes from "prop-types";
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

CardComponent.propTypes = {
  iconPath: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unite: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardComponent;
