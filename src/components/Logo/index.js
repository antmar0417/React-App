import React from "react";
import logo from "../../assets/images/headphones.svg";
import "./logo.css";

const Logo = (props) => (
  <div
    onClick={props.handleOnClick}
    className={`logo ${props.isPlaying && "logo--playing"}`}
  >
    <img src={logo} alt="logo" />
  </div>
);

export default Logo;
