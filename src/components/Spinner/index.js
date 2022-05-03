import React from "react";
import "./spinner.css";

const Spinner = (props) => {
  return (
    <>
      <div className="codepad-logo">
        <div className="logo"></div>
      </div>
      <h1 className="message">{props.message}</h1>
    </>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
