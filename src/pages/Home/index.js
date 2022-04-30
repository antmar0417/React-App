import React from "react";
import View from "../../components/View";
import Clock from "../../components/Clock";
import "./home.css";

const HomePage = (props) => {
  return (
    <View className="home-view">
      <div>
        <Clock />
      </div>
      <div
        className="search-items"
        style={{ width: "100%", marginBottom: "100px", textAlign: "left" }}
      >
        <h1>This is the home page</h1>
      </div>
    </View>
  );
};

export default HomePage;
