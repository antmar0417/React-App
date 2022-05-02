import React from "react";
import Date1 from "../Date1";
import Clock from "../Clock";
import View from "../View";
import "./season-display.css";

const seasonConfig = {
  summer: {
    text: "Almost summer!",
    iconName: "fas fa-sun",
  },
  winter: {
    text: "Brr, it is chilly!",
    iconName: "fas fa-snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <View className="home-view">
      <div className="wrapper fadeInDown">
        <div className={`season-display ${season}`}>
          <i className={`${iconName}`} />
          <h2 className="location">{text}</h2>
          <p className="date">
            <Date1 />
          </p>
          <h1 className="clock">
            <Clock />
          </h1>
        </div>
      </div>
    </View>
  );
};

export default SeasonDisplay;
