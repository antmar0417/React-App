import React from "react";
import { Link } from "@reach/router";
import View from "../../components/View";
import "./notFound.css";

const NotFound = (props) => {
  return (
    <View className="not-found-view">
      <h1>404</h1>
      <p>Oh, something went wrong! Please go back to the home page</p>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/pictures">Pictures</Link>
    </View>
  );
};

export default NotFound;
