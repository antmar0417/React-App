import React from "react";
import PropTypes from "prop-types";
import moon from "./../../assets/images/moon.svg";
import "./themeIcon.css";

const ThemeIcon = (props) => {
  return (
    <div className="theme-icon" onClick={props.handleClick}>
      <img src={moon} alt="moon" />
    </div>
  );
};

ThemeIcon.propTypes = {
  handleClick: PropTypes.func,
};

export default ThemeIcon;
