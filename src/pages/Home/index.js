import React from "react";
import { Link } from "@reach/router";
import Logo from "../../components/Logo";
import View from "../../components/View";
import "./home.css";

const HomePage = () => {
  return (
    <View className="home-view">
      <Logo size="small" style={{ marginBottom: "50px" }} />

      <div
        className="search-items"
        style={{ width: "100%", marginBottom: "100px" }}
      >
        <h1>This is the home page</h1>
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/pictures">Pictures</Link>
      </div>
    </View>
  );
};

export default HomePage;
