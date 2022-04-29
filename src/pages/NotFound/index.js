import React from "react";
import { navigate } from "@reach/router";
import Button from "./../../components/Button";
import View from "../../components/View";
import "./notFound.css";

const NotFound = (props) => {
  return (
    <View className="not-found-view">
      <h1>404</h1>
      <p>Oh, something went wrong! Please go back to the home page</p>
      <Button handleClick={() => navigate("/")}>Go back</Button>
    </View>
  );
};

export default NotFound;
