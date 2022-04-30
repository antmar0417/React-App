import React from "react";
import PropTypes from "prop-types";
import "./themeIcon.css";

const ThemeIcon = (props) => {
  return (
    <h1 className="theme-icon" onClick={props.handleClick}>
      Theme<i className="fab fa-react"></i>
    </h1>
  );
};

ThemeIcon.propTypes = {
  handleClick: PropTypes.func,
};

export default ThemeIcon;
