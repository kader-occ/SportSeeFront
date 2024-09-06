import React from "react";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#ff0101",
          padding: "5px 2px",
          color: "white",
          fontSize: "7px",
        }}
      >
        <p>{`Poids : ${payload[0].value} kg`}</p>
        <p>{`Calories : ${payload[1].value} kcal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomTooltip;
