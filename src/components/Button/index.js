import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
